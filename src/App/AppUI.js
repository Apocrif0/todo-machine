import React from "react";
import { todoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoLis } from "../TodoLis";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import {Modal} from "../Modal"



function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal}= React.useContext(todoContext);
    return(

      <React.Fragment>
        <TodoCounter />
        <TodoSearch/>
        
          
            <TodoLis>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <p>Estamos cargando, no desesperes...</p>}
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
              {searchedTodos.map(todos=>(
             <TodoItem
                key={todos.text} 
                text={todos.text}
                completed ={todos.completed}
                onComplete={()=>completeTodos(todos.text)}
                 onDelete = {()=>deleteTodos(todos.text)}
              />
       ))}
       </TodoLis>

       {!!openModal &&(
         <Modal>  
         <TodoForm/>
        </Modal>  
       )}   
       

      <CreateTodoButton
       setOpenModal ={setOpenModal}
      
      />
    </React.Fragment>

    );
}

export {AppUI}