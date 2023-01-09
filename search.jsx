import {React,useState,useEffect} from 'react'
import axios from 'axios'

import { date } from 'yup'





function Search() {
    const[search,setSearch] = useState("") 
    const [data,setData] = useState([])
    
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=065564d138c05ba811b5faa1576cd982&units=metric`) 
        .then((res)=>setData(res.data))
        setSearch("")
    }
    
    let emoji=null
 let emojiHandler = ()=>{
if(!data.main){
 emoji = "fa-sun" 
}
else if(data.weather[0].main==="Clouds"){
    emoji="fa-cloud"
}
else if(data.weather[0].main==="Clear"){
    emoji="fa-sun"
}
else if(data.weather[0].main==="Rain"){
    emoji="fa-cloud-shower-heavy"
}
else if(data.weather[0].main==="Snow"){
    emoji="fa-snow-flake"
}
}

  emojiHandler()
        
      
    //Date
    let d = new Date()
    let date =d.getDate()
    let year = d.getFullYear()
    let month = d.toLocaleString("default",{month:"long"})
let day = d.toLocaleString("default",{weekday:"long"})
//Time
let time = d.toLocaleString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})

    



  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-4">
            <div className="card text-bg-dark text-center">
               

      {data.main?<img  src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`}/>:<img src="https://source.unsplash.com/600x900/?nature,water" ></img>}
           
  
  <div className="card-img-overlay">
    <form >
    <div className="input-group mb-4 w-75 mx-auto">
  <input onChange={(e)=>setSearch(e.target.value)} value={search} type="search" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon2"  />
  
  <button type='submit' onClick={handleSubmit} className="mx-1 border-radius-40px" ><i className="fas fa-search"></i></button>
</div>
    </form>
    <div className='bg-dark bg-opacity-50 py-3'>
    <h3 className="card-title ">{data.name}</h3>
    <p className="card-text ">{day} {date} {month}  {year} <br />{time} </p>
    
    <hr />
    <i className={`fas ${emoji} fa-4x`}></i>
    
    <div>
        {data.main?<h1>{data.main.temp}&deg;C</h1>:null}
        
    </div>

    <div> {data.main?<h4>Humidity : {data.main.humidity}%</h4>:null}
  </div>
    
    <div>
    {data.weather?<h2>{data.weather[0].description}</h2>:null}
    </div>
   
  
   
    </div>
    
  </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Search