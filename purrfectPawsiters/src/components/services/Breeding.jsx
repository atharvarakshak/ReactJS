import React from 'react';
import didi from '../../img/daycare.svg';
import m6 from '../../img/m6.svg';
import Section from '../../img/Section.svg'; 

function Breeding() {
  return (
    <div className=' flex flex-col md:flex-row items-center justify-center   relative top-20 px-4 md:px-0 py-10'>
      <div className='md:w-1/3 md:mr-6 relative bottom-20  md:right-60'>
        <img src={Section} alt="" className='hidden md:block md:absolute md:bottom-20 md:right-20 w-full h-full z-[-1]' />
        <img src={m6} alt='Pet' className='relative  top-20 md:left-20 w-full md:h-auto  -mt-20 md:-mt-0 ' />
      </div>
      <div className='md:w-1/3 md:mx-6 my-6 md:my-0 text-center relative ' >
        <h1 className='text-3xl font-bold mb-4'>Breeding Assistance</h1>
        <p className='mb-4'>In a breeding assistant service for pets, you can offer support for mating, pregnancy monitoring, birthing, and postnatal care. Provide guidance on nutrition, health, and hygiene, and assist with finding suitable mates and coordinating veterinary care</p>
        <button className='bg-[#FFBB7A] h-10 text-white px-4 py-2 rounded hover:bg-yellow-500'>Book Now</button>
      </div>
    </div>
  );
}

export default Breeding;
