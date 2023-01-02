import React,{useState} from 'react'
import Todo from '../Todo/Todo'

function Todolist({todos,setTodos,filteredTodos}) {
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
    {
      filteredTodos.map((todo,index)=>(
        <Todo id={index} todo={todo} todos={todos} setTodos={setTodos} key={index} text={todo.text}/>
      ))
    }
      </ul>
  
    </div>
  )
}

export default Todolist