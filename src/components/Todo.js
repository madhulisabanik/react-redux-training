import { useState } from 'react';

export default function Todo(props){

    const [task, setTask] = useState('');
    const [todoListState, setTodoListState] = useState(props.todoData);

    // Storing the input text box value
    const handleChange = (event) => {
        setTask(event.target.value);
    };

    // Adding new task in Todo list locally
    const handleClick = () => {
        setTodoListState((prevTodoListState) => [
            ...prevTodoListState, {
                "id": prevTodoListState.length + 1,
                "task": task,
                "description": "This is a dummy task",
                "isChecked": false
            }
        ])

        // After adding the new task, clearing the input text box
        setTask('');
    };

    // Handle checked box event
    const handleChecked = (event) => {
        //console.log(event.target.id);
        let list = [...todoListState];
        const matchedIndex = todoListState.findIndex((el) => { return el.id === parseInt(event.target.id)})
        list[matchedIndex].isChecked = true;
        setTodoListState([...list]);
    };

    // Creating Todo list render function
    const todoList = todoListState.map((item) => {
        return(
            <div key={item.id}>
                <ul className="listStyle checkbox-group">
                    {item.isChecked ? <i className="fa-solid fa-check"></i> : <input type="checkbox" id={item.id} onClick={handleChecked} />}
                    <li>{item.task}</li> - <li>{item.description}</li>
                </ul>
            </div>
        )
    });
    
    return (
        <div>
            <input type="text" value={task} placeholder="Create new task..." className="create-task-box" onChange={handleChange} />
            <input type="submit" value="Submit" className="create-task-submit-btn" onClick={handleClick} />
            {todoList}
        </div>
    );
}