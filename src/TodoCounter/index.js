import React from "react";
import { todoContext } from "../todoContext";
import './TodoCounter.css';

function TodoCounter(){

    const { totalTodos, completedTodos } = React.useContext(todoContext);

    return(
        <div className="TodoCounter" >
            <h2 > {totalTodos} tareas pendientes</h2>
            <p>{completedTodos} completadas</p>
          
        </div>
        
    );
}

export {TodoCounter};