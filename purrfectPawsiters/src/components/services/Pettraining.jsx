import React from 'react';
import didi from '../../img/daycare.svg';
import m1 from '../../img/m1.svg';

function Daycare() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto  px-4 md:px-0 py-10'>
      <div className='md:w-1/3 md:mr-6'>
        <img src={m1} alt='Pet' className='w-full md:h-auto' />
      </div>
      <div className='md:w-1/3 md:mx-6 my-6 md:my-0 text-center '>
        <h1 className='text-3xl font-bold mb-4'>Day Care</h1>
        <p className='mb-4'>We provide on-demand day care services by ensuring the safety of your pet. Our services include playtime, bathroom breaks, basic exercise, leash training if needed, and regular updates to owners.</p>
        <button className='bg-[#FFBB7A] h-10  text-white px-4 py-2 rounded hover:bg-yellow-500'>Book Now</button>
      </div>
      <div className='hidden md:block '>
        <img className='w-full md:h-auto ' src={didi} alt='Daycare' />
      </div>
    </div>
  );
}

export default Daycare;
