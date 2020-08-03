import React from "react";

interface PropTypes{
  items: {title:string,id:string}[]
}

const TodoList:React.FC<PropTypes> = (prop)=>{
    return <div>
         <ul>
             {
                 prop.items.map(item=>(
                     <li key={item.id}>
                         <h3>{item.title}</h3>
                     </li>
                 ))

             }
         </ul>
    </div>
}

export default TodoList;