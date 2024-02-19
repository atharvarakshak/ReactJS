import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color,setColor] = useState("olive")
  
 
  return (
    <>
        <div className='w-full h-screen '
        style={{backgroundColor: color }}>

          <div className="fixed flex flex-wrap justify-evenly bottom-12 inset-x-0 px-2 py-2 rounded-full border-2 border-grey bg-white ">
            <div className="flex flex-wrap justify-center gap-3 shadow-xl  bg-red-500 rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("red")}>Red</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-500 rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("blue")}>Blue</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-orange-500 rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("orange")}>Orange</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-purple-500 rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("purple")}>Purple</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black text-white rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("black")}>Black</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl border-2  border-grey px-3 py-2  ">
              <button onClick={()=>setColor("white")}>White</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-green-500 rounded-xl px-3 py-2  ">
              <button onClick={()=>setColor("green")}>Green</button>
            </div>
          </div>

        </div>
    </>
  )
}

export default App
