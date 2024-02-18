import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hooks [var,method] = hookname(valuedefault)
  let [counter,setCounter] = useState(15) //hooks 
  // const [count, setCount] = useState(0)
  // let counter = 5
  const addValue =()=>{
    console.log("value added ",counter)
    // counter = counter + 1
    if(counter<20){

      setCounter(counter+1)
    }
    console.log(counter);
  }
  const removeValue =()=>{
    console.log("value removed ",counter)
    // counter = counter + 1
    if(counter>0){

      setCounter(counter-1)
    }
    console.log(counter);
  }
  return (
    <>
      
      <h1>Chai aur React</h1>
      <h2>Conter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br /><br />
      <button
      onClick={removeValue}>Remove value : {counter}</button>

    </>
  )
}

export default App
