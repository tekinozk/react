import axios from "axios";
import fetch from "node-fetch";

async function getData(userId){
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/users + ${userId}`)).json()
    const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json()
    const newArray =[]
    newArray.push(data,post) 
console.log(newArray)

   
}

getData(1)


