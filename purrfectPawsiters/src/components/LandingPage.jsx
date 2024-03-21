import React from 'react'
import bgi from '../img/landing.svg'

function LandingPage() {
  return (
    <div className="  h-[100%] w-full">
        <img className='w-full ' src={bgi} />
        <div className=' absolute bg-[#618289] h-10  w-full'> </div>
    </div>
    
  )
}

export default LandingPage
