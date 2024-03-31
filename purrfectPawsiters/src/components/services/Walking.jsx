import React from 'react';
import didi from '../../img/daycare.svg';
import m5 from '../../img/m5.svg';
import Section from '../../img/Section.svg'; 

function Daycare() {
  return (
    <div className=' flex flex-col md:flex-row items-center justify-center   relative top-20 px-4 md:px-0 py-10 mb-24'>
      <div className='hidden md:inline-block'>
      <div className='md:w-1/3 md:mx-6 my-6 md:my-0 text-center relative ' >
        <h1 className='text-3xl font-bold mb-4'>Walking</h1>
        <p className='mb-4'>We provide regular and on-demand dog walks, tailored to the pet's needs. 
            So stay free from the stress to ensure proper walk for your pet dog.</p>
        <button className='bg-[#FFBB7A] h-10 text-white px-4 py-2 rounded hover:bg-yellow-500'>Book Now</button>
      </div>
      <div className='md:w-1/3 md:mr-6 relative bottom-20  md:right-60'>
        <img src={Section} alt="" className='hidden md:block md:absolute md:bottom-24 md:left-[600px] w-full h-full z-[-1]' />
        <img src={m5} alt='Pet' className='relative  top-20 md:left-[90%] h-full w-full md:h-auto  -mt-20 md:-mt-0 ' />
      </div>
      </div>
      <div className='block md:hidden'>
      <div className='md:w-1/3 md:mr-6 relative bottom-20  md:right-60'>
        <img src={Section} alt="" className='hidden md:block md:absolute md:bottom-24 md:left-[600px] w-full h-full z-[-1]' />
        <img src={m5} alt='Pet' className='relative  top-20 md:left-[90%] h-full w-full md:h-auto  -mt-20 md:-mt-0 ' />
      </div>
      <div className='md:w-1/3 md:mx-6 my-6 md:my-0 text-center relative ' >
        <h1 className='text-3xl font-bold mb-4'>Walking</h1>
        <p className='mb-4'>We provide regular and on-demand dog walks, tailored to the pet's needs. 
            So stay free from the stress to ensure proper walk for your pet dog.</p>
        <button className='bg-[#FFBB7A] h-10 text-white px-4 py-2 rounded hover:bg-yellow-500'>Book Now</button>
      </div>
      </div>
    </div>
  );
}

export default Daycare;
