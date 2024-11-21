import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <nav className='w-full h-[72px] bg-[#f7f7f7] flex items-center justify-center'>
      <div className='w-[90%] h-[100%] flex items-center justify-between'>
        <div className='w-[12%] h-[100%] relative'><Image className='absolute' src={'/images/logo.svg'} alt='Logo' layout='fill'></Image></div>
        <div className='w-[80%] h-[44px] bg-white flex items-center justify-between'>
          <ul className='w-[75%] flex items-center justify-between'>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>Home</h3></li>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>Courses</h3></li>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>Services</h3></li>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>Achievement</h3></li>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>About us</h3></li>
            <li className='border-b-2 border-solid border-black p-[10px]'><h3 className='text-[16px] roboto-regular'>Testimonial</h3></li>
          </ul>
          <div className='w-[25%] flex items-center justify-evenly'>
            <button className='h-[40px] w-[80px] bg-white border-solid border-2 border-black rounded-[5px] text-[16px] text-black roboto-regular'>Login</button>
            <button className='h-[40px] w-[80px] bg-black border-solid border-2 border-black rounded-[5px] text-[16px] text-white roboto-regular'>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
