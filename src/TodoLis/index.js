import React from "react";
import './TodoList.css'
function TodoLis(props){
    return (
        <section>
          <ul>
            {props.children}
          </ul>
        </section>
      );
}

export{TodoLis};