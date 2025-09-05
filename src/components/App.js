
import React, { useState } from "react";
import Child from "./Child";

const data = [    
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice coding", completed: false },
    { id: 3, text: "Read a book", completed: false },
];

const App = () => {
  const [todos,setTodos]=useState(data);
  const handleComplete=(id)=>{
   const changed = todos.map(todo => todo.id === id ? {...todo, completed:true} : todo);
       setTodos(changed);

  }
  return (
    <div>
<h1>Parent Component</h1>
    <Child todos={todos} handleComplete={handleComplete} />

    </div>
  )
}

export default App
