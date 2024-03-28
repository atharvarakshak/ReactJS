import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import LandingPage from './components/landingPage'
import Footer from './components/Footer'
import Services from './components/Services'
import Middle from './components/Middle'

function App() {


  return (
   
    <div className='m-0 absolute top-0 left-0  right-0  h-screen w-screen flex flex-col'>
        
        <div className='sticky top-0 '>

             <Nav/ >
        </div>
      
      <div className='relative z-[-1]' >
      

      <LandingPage/>
      <div className=' absolute top-25 z-10 left-[34%] md:left-[40%] bg-white rounded-xl '><Services  /></div></div>

      <div className='relative top-60 md:top-24 z-[-2] '><Middle /></div>

      <div className='relative top-20'>

      <Footer/>
      </div>

    </div>
  
  )
}

export default App
