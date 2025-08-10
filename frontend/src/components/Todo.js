import { TbHttpDelete } from "react-icons/tb";
import { useState } from "react";


import { update_todo } from "../api/endpoints";

const Todo = ({id, todo_name, completed, deleteTodo}) => {

    const [isChecked, setChecked] = useState(completed)

    const handleDelete = async() => {
        await deleteTodo(id);
    }

    const handleComplete = async() => {
        update_todo(id, !completed)
        setChecked(!isChecked)
    }

    return (
        <div className="todo">
           <div className="todo-container">
              <input checked={isChecked} onClick={handleComplete} type='checkbox'/>
              <h3>{todo_name}</h3>
              <TbHttpDelete onClick={handleDelete} size='20px'/>
           </div>
        </div>
    )

}

export default Todo;


