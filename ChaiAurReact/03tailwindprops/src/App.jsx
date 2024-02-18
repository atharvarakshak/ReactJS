import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username :"hitesh",
    age : 21
  }

  return (
    <>
      <div className='border-2 border-black rounded-xl'>
        <h1 className='text-red-500 p-4 mt-4 ml-4 mr-4  mrounded-lg mb-4 bg-green-400'>Taiwind Test</h1>
        <Card username="Hitesh Choudhary"  btnText="click me"/>
        
        <Card username="Atharva"  btnText="visit me"/>
      
      </div>

    </>
  )
}

export default App
