import React from 'react'
import Image from 'next/image'
import { FaDribbble,FaLinkedin,FaTwitter } from "react-icons/fa";

function Card3({image,title,subtitle}:{image:string,title:string,subtitle:string}) {
  return (
    <div className='w-[31%] h-fit bg-[#ffffff] flex flex-col items-center justify-center gap-[24px] py-[5px] max-md:h-[210px] max-md:w-[90%] max-md:bg-[#f7f7f7]'>
        <div className='relative w-[80px] h-[80px]'>
            <Image className='absolute' src={image} alt={title} layout='fill'></Image>
        </div>
        <div className='w-full h-[25%] flex flex-col items-center justify-around'>
            <h2 className='text-[20px] roboto-bold text-black'>{title}</h2>
            <h3 className='text-[18px] roboto-regular text-black'>{subtitle}</h3>
        </div>
        <div className='w-[32%] h-[25px] flex items-end justify-around'>
          <FaLinkedin className='w-full h-full text-black hover:text-[#696969] duration-[500ms]' />
          <FaTwitter className='w-full h-full text-black hover:text-[#696969] duration-[500ms]' />
          <FaDribbble className='w-full h-full text-black hover:text-[#696969] duration-[500ms]' />
        </div>
      
    </div>
  )
}

export default Card3
