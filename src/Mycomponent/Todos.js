import React from 'react'
// import { TodoItem, Todoitem } from './todoitem'
// import { TodoItem } from './Todoitem'
import{TodoItem} from "./Todoitem"



export const Todos = (props) => {
  let myStyle ={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
        <h3 className="my-3">Todos List</h3>
        {props.todos.length===0? "No todos to display":
        props.todos.map((todo)=>{
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            )
        })
      }
        
    </div>
  )
}
