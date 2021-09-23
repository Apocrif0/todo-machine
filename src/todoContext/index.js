import react from "react";
import { useLocalStore } from "./useLocalStorage";
const todoContext = react.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    
      } = useLocalStore('TODOS_V1',[]);
    
      const [searchValue,setSearchValue]= react.useState('');
      const [openModal, setOpenModal] = react.useState(false);
      const completedTodos = todos.filter(todo =>!!todos.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = []
    
      if(!searchValue.length>=1){
        
        searchedTodos = todos;
    
      }else{
    
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
        })
    
      }

      const addTodo = (text) =>{
    

        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos);
        
      }
    
      
    
      const completeTodos = (text) =>{
    
        const todoIndex = todos.findIndex(todo =>todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        
      }
    
      const deleteTodos = (text) =>{
    
        const todoIndex = todos.findIndex(todo =>todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
        
      }

    return(
       <todoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo,
       }}>
          {props.children}
       </todoContext.Provider>
    );
}

export {todoContext,TodoProvider}