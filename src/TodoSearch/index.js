import React from "react";
import {todoContext} from "../todoContext";
import './TodoSearch.css';

function TodoSearch(){
    
    const {searchValue,setSearchValue } = React.useContext(todoContext);
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input  
        className="TodoSearch" 
        placeholder="Tarea"
        value ={searchValue}
        onChange ={onSearchValueChange}
        >
        </input>
    );
}

export{TodoSearch};