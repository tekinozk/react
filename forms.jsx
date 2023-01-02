import React,{useState} from 'react'
import "./style.css"


function Forms({setInputText,setTodos,todos,inputText,setStatus}) {
  const inputTextHandler = (e)=>{
setInputText(e.target.value)
  }
const submitTodoHandler = (e)=>{
e.preventDefault()
if(inputText ===""){
  return false
}
setTodos([
  ...todos,{text:inputText,completed:false,id:Math.floor(Math.random()*1000)}
])
setInputText("")
}
const statusHandler = (e)=>{
setStatus(e.target.value)
}

  
    return (
        <div>
    <header>
      <h1>Tekin's Todo List</h1>
    </header>
    <form>
      <input value={inputText} onChange={inputTextHandler}  type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    

    <script src="./app.js"></script>
  </div>
      )
}


    
 

export default Forms