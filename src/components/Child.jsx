import React from 'react'

const Child = ({todos,handleComplete}) => {
  return (
    <div>
            <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.completed ? (
           <s> {todo.text}</s>
          ) : (
            <>
              {todo.text}{" "}
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            </>
      )}
        </li>
      ))}
    </ul>

    </div>
  )
}

export default Child