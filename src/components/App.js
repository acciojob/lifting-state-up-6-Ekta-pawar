
import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [todos,setTodos]=useState([    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice coding", completed: false },
    { id: 3, text: "Read a book", completed: false },
])
  const handleComplete=(id)=>{
   
      setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
 

    )

  }
  return (
    <div>
    <Child todos={todos} handleComplete={handleComplete} />

    </div>
  )
}

export default App
