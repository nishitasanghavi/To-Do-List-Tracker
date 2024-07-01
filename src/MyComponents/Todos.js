import React from 'react'
import {TodoItems} from "./TodoItems";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length == 0 ? "No Todos" :
      props.todos.map((todos)=>
      {
        return <TodoItems todos={todos} key={todos.srno} onDelete={props.onDelete}/>
      })}
    </div>
  )
}
