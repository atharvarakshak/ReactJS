import React from 'react'
import Nav from '../Nav'
import LandingPage from '../landingPage'
import Middle from '../Middle'
import Footer from '../Footer'
import Services from '../Services'


export default function Home() {
  return (
    <div className='z-10'>
    <div className='m-0 absolute top-0 left-0  right-0  h-screen w-screen flex flex-col'>
        
        <div className='sticky top-0 '>

             <Nav/>
        </div>
      
      <div className='relative z-[-1]' >
      

      <LandingPage/>
      <div className=' absolute top-25 z-10 left-[34%] md:left-[40%] bg-white rounded-xl '><Services  /></div></div>

      <div className='relative top-60 md:top-24 z-[-2] '><Middle /></div>

      <div className='relative top-20'>

      <Footer/>
      </div>

    </div>
    </div>
  )
}

