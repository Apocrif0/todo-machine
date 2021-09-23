import React from "react";

function useLocalStore(itemName, intialValue){
    const [error, setError] = React.useState(false);
    const[loading,SetLoading] =React.useState(true);
    const [item,setItem]=React.useState(intialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName)
          let parseItem;
          
  
          if(!localStorageItem){
  
          localStorage.setItem(itemName,JSON.stringify(intialValue));
          parseItem = intialValue;
  
          }else{
            parseItem = JSON.parse(localStorageItem);
          }
          setItem(parseItem);
          SetLoading(false);
  
        }catch(error){
          setError(error);
        }
      },1000);
  
  
    });
  
    const saveItem = (newItem) =>{
  
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedTodos);
      setItem(newItem);
  
    };
  
    return{
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export{useLocalStore};
  