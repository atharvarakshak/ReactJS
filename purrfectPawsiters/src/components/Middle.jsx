import React from 'react'
import m1 from '..//img/m1.svg'
import m2 from '..//img/m2.svg'
import m3 from '..//img/m3.svg'
import m4 from '..//img/m4.svg'
import m5 from '..//img/m5.svg'
import m6 from '..//img/m6.svg'
import { Link,NavLink } from 'react-router-dom';
function Middle() {
  return (
    <div className='bg-white z-0'>
      <div className='relative top-10 flex flex-col md:flex-row z-0 p-5 '>
        <img className='h-[250px] w-full md:w-1/2 z-0' src={m1} alt="" /> 
        <div className='z-0 flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='z-0 text-xl md:text-3xl mb-2 font-bold'>Day Care</h2> 
          <p className='z-0 text-black text-sm md:text-base mb-4 w-[55%]'>Where furry friends feel at home: Find your perfect pet caretaker today!</p> 
          <NavLink to="/daycare" >
                                   
                   <button className='z-0 mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button> 
          </NavLink>
         
        </div>
      </div>
      <div className='relative top-10 flex flex-col md:flex-row p-5 '>
        <img className='block md:hidden h-[250px] w-full md:w-1/2 z-0' src={m2} alt="" /> 
        <div className='flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='text-xl md:text-3xl mb-2 font-bold'>Grooming</h2> 
          <p className='text-black text-sm md:text-base mb-4 w-[55%]'> Let us handle it all for you, so you can focus on the more important things in life.</p> 
          <NavLink to="/grooming">

            <button className='mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button> 
          </NavLink>
        </div>
        <img className='hidden md:block h-[250px] w-full md:w-1/2' src={m2} alt="" /> 
      </div>
      <div className='relative top-10 flex flex-col md:flex-row p-5 '>
        <img className='h-[250px] w-full md:w-1/2 relative left-0' src={m3} alt="" /> 
        <div className='flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='text-xl md:text-3xl mb-2 font-bold'>Pet Training</h2> 
          <p className='text-black text-sm md:text-base mb-4 w-[55%]'>Let us handle the stress of training pets to provide mental stimulation and to make your bond with your pet even stronger.</p> 
          <NavLink to="/pettraining">
          <button className='mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button>
          </NavLink> 
        </div>
      </div>
      <div className='relative top-10 flex flex-col md:flex-row p-5'>
        <img className='block md:hidden h-[450px] w-full md:w-1/2  ' src={m4} alt="" /> 
        <div className='flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='text-xl md:text-3xl mb-2 font-bold'>Veterinary Assistance</h2> 
          <p className='text-black text-sm md:text-base mb-4 w-[55%]'> We're committed to providing best health assistance to your pets so you can stay worry free.</p> 
          <NavLink to="/vetassistance">
          <button className='mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button> 
          </NavLink>
        </div>
        <img className='hidden md:block h-[250px] w-full md:w-1/2 ' src={m4} alt="" /> 
      </div>
      <div className='relative top-10 flex flex-col md:flex-row p-5'>
        <img className='h-[250px] w-full md:w-1/2 relative left-0' src={m5} alt="" /> 
        <div className='flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='text-xl md:text-3xl mb-2 font-bold'>Walking </h2> 
          <p className='text-black text-sm md:text-base mb-4 w-[55%]'>We provide regular and on-demand dog walks, tailored to the pet's needs. So stay free from the stress to ensure proper walk for your pet dog.</p> 
          <NavLink to="/walking">
          <button className='mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button> 
          </NavLink>
        </div>
      </div>
      <div className='relative top-10 flex flex-col md:flex-row p-5'>
        <img className='block md:hidden h-[450px] w-full md:w-1/2  ' src={m6} alt="" /> 
        <div className='flex flex-col justify-center items-center md:w-1/2 px-4 py-6'> 
          <h2 className='text-xl md:text-3xl mb-2 font-bold'>Breeding Assistance</h2> 
          <p className='text-black text-sm md:text-base mb-4 w-[55%]'> We offer support for mating, pregnancy monitoring, birthing, and postnatal care. Provide guidance on nutrition, health, and hygiene, and assist with finding suitable mates and coordinating veterinary care.</p> 
          <NavLink to="/breeding">
          <button className='mt-5 h-10 w-full md:w-auto rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-600'>Enquire now</button> 
          </NavLink>
        </div>
        <img className='hidden md:block h-[250px] w-full md:w-1/2 ' src={m6} alt="" /> 
      </div>
  </div>
  

  )
}

export default Middle
