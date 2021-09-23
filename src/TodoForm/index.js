import React from "react";
import{todoContext} from "../todoContext"
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue,setNewTodoValue] = React.useState('')
     const{
        addTodo,
        setOpenModal,
     } = React.useContext(todoContext);

     const onChange = (event)=>{
        setNewTodoValue (event.target.value);
    }
    const onCancele = ()=>{
        setOpenModal(false);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>....</label>
            <textarea
            value = {newTodoValue}
            onChange ={onChange}
                placeholder="El pepe te reta a completarlo todo"/>
            <div
                className="TodoForm-buttonContainer">
                <button
                type ="button"
                className="TodoForm-button TodoForm-button-cancel"
                    onClick = {onCancele}
                    >Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type = "submit"
                    onClick = {onSubmit}
                    >Añadir</button>
            </div>
        </form>
    )
}
export{TodoForm};