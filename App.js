import Forms from "./components/forms/forms";
import Todolist from "./components/todolist/todolist";
import React,{useState,useEffect} from "react";

function App() {
  useEffect(()=>{
 getLocal()
  },[])
  const[inputText,setInputText] = useState("")
 const [todos,setTodos] = useState([])
 const [status,setStatus] = useState("all")
 const[filteredTodos,setFilteredTodos]=useState([])
 const filterHandler = ()=>{
  switch(status){
    case"completed":
    setFilteredTodos(todos.filter((todo)=>todo.completed === true)) 
    break
    case "uncompleted":setFilteredTodos(todos.filter((todo)=>todo.completed === false)) 
    break
    default:setFilteredTodos(todos)
  }
 }
 //save to local
 const saveLocal = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
 }
 const getLocal = ()=>{
  
    let todoLocal =JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal)
  
 }
 useEffect(()=>{
  filterHandler()
  saveLocal()
 },[todos,status])
  return (
    <div className="App">
    <Forms setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
    <Todolist filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
   
    </div>
  );
}

export default App;
