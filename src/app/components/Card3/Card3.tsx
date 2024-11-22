import React from 'react'
import Image from 'next/image'
import { FaDribbble,FaLinkedin,FaTwitter } from "react-icons/fa";

function Card3({image,title,subtitle}:{image:string,title:string,subtitle:string}) {
  return (
    <div className='w-[31%] h-full bg-[#ffffff] flex flex-col items-center justify-between py-[5px]'>
        <div className='relative w-[80px] h-[80px]'>
            <Image className='absolute' src={image} alt={title} layout='fill'></Image>
        </div>
        <div className='w-full h-[25%] flex flex-col items-center justify-around'>
            <h2 className='text-[20px] roboto-bold'>{title}</h2>
            <h3 className='text-[18px] roboto-regular'>{subtitle}</h3>
        </div>
        <div className='w-[32%] h-[25px] flex items-end justify-around'>
          <FaLinkedin className='w-full h-full' />
          <FaTwitter className='w-full h-full' />
          <FaDribbble className='w-full h-full' />
        </div>
      
    </div>
  )
}

export default Card3
