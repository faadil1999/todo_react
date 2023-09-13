import { useState } from "react";
import { createNewTask } from "../task-util";

export default function FormTODO(props){
    
    const [task, setTasks] = useState('')

    function handleAddTask(event){
            event.preventDefault();
            event.target.value = '';
            props.addTask(createNewTask(task, false))
    }

    function handleOnchange(e){
        const value = e.target.value;
        setTasks(value);
    }

    return (
        <form onSubmit={handleAddTask}>
                  <input
                    type="text"
                    className="new-todo"
                    placeholder="Ajouter une tâche"
                    autoComplete="off"
                    autoFocus={true}
                    value={task}
                    onChange={handleOnchange}
                  />
        </form>
    )
}