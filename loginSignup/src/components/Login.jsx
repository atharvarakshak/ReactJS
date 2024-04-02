import axios from 'axios';
import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom"


function Login() {

    const history = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:5173/",{
                email,password
            })
            .then(res=>{
                if(res.data="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data="notexist"){
                    alert("User is not signup .")
                }
            })
            .catch(e=>{
                alert("wrong details .")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }

    }

  return (
    <div>
      <h1>Login</h1>
      <form action="POST">
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
        <br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />

        <input type="submit" onClick={submit} />
      </form>
      <br />

      <p>or</p>

      <br />

      <Link to="/signup">SignUp page</Link>
    </div>
  )
}

export default Login