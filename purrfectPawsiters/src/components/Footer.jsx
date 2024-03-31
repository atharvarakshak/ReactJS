import React from 'react'
import qr from '../img/clarity_qr-code-line.svg'
import logo from '../img/logo.svg';
import twi from '../img/twitter.svg';
import link from '../img/linkedin.svg';
import face from '../img/facebook.svg';
import insta from '../img/insta.svg';
function Footer() {
  return (
    <footer className='w-full bg-[#FFBB7A] h-20vh grid grid-cols-6 relative bottom-0 mt-10'>
     
      <div className='col-span-2 m-auto flex flex-col'>
            <div className='flex'>
                <div><img src={qr} alt="" className='h-10 w-10' /></div>
                <div className='h-18 border-[1px] border-white mx-2 '></div>
                <div className='flex flex-col'>
                    <div className='flex items-center text-white font-bold'>
                        <img src={logo} alt="" className='h-4 w-4' />
                        <p>PAWSITTERS</p>
                    </div>
                    <p className='text-sm text-white'>Scan QR for more</p>
                </div>
            </div>
            <div className='w-full border-[1px] border-white relative top-2 '></div>
            <div className='relative top-2 flex'>
                <a href=""> <img src={twi} alt=""  className='h-10 w-10 rounded-lg'/></a>
                <a href=""> <img src={link} alt="" className='h-10 w-10 rounded-lg'/></a>
                <a href=""> <img src={face} alt="" className='h-10 w-10 rounded-lg'/></a>
                <a href=""> <img src={insta} alt="" className='h-10 w-10 rounded-lg'/></a>
                
            </div>
      </div>
      <div >
        <div className='mx-6 my-2 flex flex-col items-start'>

        <h1 className='text-white text-lg'>Services</h1>
        <ul className='text-white flex flex-col items-start cursor-pointer text-sm'>
             <li className='hover:text-gray-400 '>Pet caretaking</li>   
              <li className='hover:text-gray-400 '>Grooming</li>   
             <li className='hover:text-gray-400 '>Veternary Services</li>   
        </ul>
        </div>

      </div>
      <div >
        <div className='mx-6 my-2 flex flex-col items-start'>

        <h1 className='text-white text-lg'>Our Trust</h1>
        <ul className='text-white flex flex-col items-start cursor-pointer text-sm'>
             <li className='hover:text-gray-400 '>Reliability</li>   
              <li className='hover:text-gray-400 '>Professionalism</li>   
             <li className='hover:text-gray-400 text-left'>Commitmenting Excellence</li>   
        </ul>
        </div>

      </div>
      <div >
        <div className='mx-6 my-2 flex flex-col items-start '>

        <h1 className='text-white text-lg'>Contact Us</h1>
        <ul className='text-white flex flex-col items-start cursor-pointer text-sm'>
             <li className='hover:text-gray-400 '>91756761677</li>   
              <li className='hover:text-gray-400 '>abc@rknec.edu</li>   
             <li className='hover:text-gray-400 '></li>   
        </ul>
        </div>

      </div>
      <div >
        <div className=' mx-6 my-2 flex flex-col items-start'>

        <h1 className='hidden md:block text-white text-lg'>Visit our FAQ page</h1>
        
        </div>

      </div>
     
    </footer>
  )
}

export default Footer
