import { useState } from 'react';

export default function Todo(props){

    const [task, setTask] = useState('');
    const [updated, setUpdated] = useState(task);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleClick = () => {
        setUpdated(task);
        console.log(task)
    };

    const todoList = props.todoData.map((item) => {
        return(
            <div key={item.id}>
                <ul className="listStyle checkbox-group">
                    <input type="checkbox" id={"checkbox"+item.id} />
                    <li>{item.task}</li> - <li>{item.description}</li>
                </ul>
            </div>
        )
    });
    
    return (
        <div>
            <input type="text" placeholder="Create new task..." className="create-task-box" onChange={handleChange} />
            <input type="submit" value="Submit" className="create-task-submit-btn" onClick={handleClick} />
            {todoList}
        </div>
    );
}