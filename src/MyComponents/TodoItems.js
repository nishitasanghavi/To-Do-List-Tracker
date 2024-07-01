import React from 'react'

export const TodoItems = ({todos, onDelete}) => {
  return (
    <div>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      {(todos.length !=0) ?
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todos)}>Delete</button> : "No Todos"
    }
    </div>
  )
}
 