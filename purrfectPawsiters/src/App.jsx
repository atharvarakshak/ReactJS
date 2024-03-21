import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import LandingPage from './components/landingPage'
import Footer from './components/Footer'
import Services from './components/Services'
import Middle from './components/Middle'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='m-0 absolute top-0 left-0  right-0  h-screen w-screen flex flex-col'>
        
        <div className='sticky top-0 '>

             <Nav/ >
        </div>
      
      <div>
      

      <LandingPage/>{/* <Services className='absolute top-0 ' /> */}</div>

      <div><Middle /></div>

      <div>

      <Footer/>
      </div>

    </div>
  
  )
}

export default App
