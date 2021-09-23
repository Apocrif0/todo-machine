import React from "react";
import './TodoItem.css'

function TodoItem(props){

    return (
        <li className="TodoItem">
          <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}>
         
         <input type="checkbox"></input>
          
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <span className="Icon Icon-delete"
          onClick={props.onDelete}>
            eliminar
          </span>
        </li>
      );
}

export{TodoItem};