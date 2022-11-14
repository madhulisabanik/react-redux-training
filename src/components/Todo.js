import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllTodos, selectTodo, addNewTodo, toggleTodoCheck } from './todoSlice';

export default function Todo(props) {

    const todoListData = useSelector(selectTodo);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:8000/courses', {
            method: 'GET'
        })
            .then(res => res.json())
            .then((finalResult) => {
                console.log('API response =====>', finalResult);
                // state.todoData = [...finalResult];
                // console.log('State =====>',state.todoData)
                dispatch(fetchAllTodos([...finalResult]));
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const [task, setTask] = useState('');
    // const [todoListState, setTodoListState] = useState(props.todoData);
    const [form, setForm] = useState(0);
    const [enquery, setEnquery] = useState('');

    // Storing the input text box value
    const handleChange = (event) => {
        setTask(event.target.value);
    };

    // Storing the input text box value
    const handleEnquery = (event) => {
        setEnquery(event.target.value);
    };

    // Adding new task in Todo list locally
    const handleClick = () => {
        // setTodoListState((prevTodoListState) => [
        //     ...prevTodoListState, {
        //         "id": prevTodoListState.length + 1,
        //         "task": task,
        //         "description": "This is a dummy task",
        //         "isChecked": false
        //     }
        // ])
        dispatch(addNewTodo({
            "id": todoListData.length + 1,
            "task": task,
            "description": "This is a dummy task",
            "isChecked": false
        }))

        // After adding the new task, clearing the input text box
        setTask('');
    };

    // Handle checked box event
    const handleChecked = (event) => {
        //console.log(event.target.id);
        // let list = [...todoListState];
        // const matchedIndex = todoListState.findIndex((el) => { return el.id === parseInt(event.target.id) })
        // list[matchedIndex].isChecked = true;
        // setTodoListState([...list]);

        dispatch(toggleTodoCheck(event.target.id));
    };

    const handleFormSubmit = () => {
        const enqueryObj = {
            id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
            query: enquery
        }
        fetch('http://localhost:8000/enqueries', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(enqueryObj)
        })
            .then((res) => res.json())
            .then((jsonRes) => {
                console.log(jsonRes);
                console.log("data added!");
                setForm(0);
            })
    }

    // Creating Todo list render function
    const todoList = todoListData.map((item) => {
        return (
            <div key={item.id}>
                <ul className="listStyle checkbox-group">
                    {item.isChecked ? <i className="fa-solid fa-check"></i> : <input type="checkbox" id={item.id} onClick={handleChecked} />}
                    <li>{item.task}</li> - <li>{item.description}</li>
                    {/* <li><input onClick={() => {console.log(item.id); setFormVisibilityState(true);}} type="submit" value="Enquery" id={item.id} /></li> */}
                    <li><button class="btn btn-secondary" onClick={() => setForm((prev) => !prev)}>Enquire</button></li>
                </ul>
            </div>
        )
    });

    return (
        <>
            <div>
                <input type="text" value={task} placeholder="Create new task..." className="create-task-box" onChange={handleChange} />
                <input type="submit" value="Submit" className="create-task-submit-btn" onClick={handleClick} />

                {
                    form ? <div>
                        <input type="text" value={enquery} placeholder="Post enquery..." className="create-task-box" onChange={handleEnquery} />
                        <input type="submit" value="Submit" className="enquery-btn" onClick={handleFormSubmit} />
                    </div> : null
                }
                {todoList}
            </div>
        </>
    );
}