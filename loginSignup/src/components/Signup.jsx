import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link,NavLink} from "react-router-dom"


function Signup() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5173/signup",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    alert("user already exist .")
                    // history("/home",{state:{id:email}})
                }
                else if(res.data="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details .")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
            console.log(e);
        }

    }

  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />

        <input type="submit" onClick={submit} />
      </form>
      <br />

      <p>or</p>

      <br />

      <Link to="/">Login Page</Link>
    </div>
  )
}

export default Signup
