import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { stringify } from 'querystring';

function App() {
  const [todos,setTodos] = useState<{id:string,title:string}[]>([]);
  

  const onAddTodo = (text:string)=>{
    console.log("on add Todo = ",text);
    setTodos([...todos,{id:Math.random().toString(),title:text}]);
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={onAddTodo}/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
