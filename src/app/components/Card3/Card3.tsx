import React from 'react'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'

function Card3({image,title,subtitle}:{image:string,title:string,subtitle:string}) {
  return (
    <div className='w-[31%] h-full bg-[#ffffff] flex flex-col items-center justify-between'>
        <div className='relative w-[80px] h-[80px]'>
            <Image className='absolute' src={image} alt={title} layout='fill'></Image>
        </div>
        <div className='w-full h-[25%] flex flex-col items-center justify-around'>
            <h2 className='text-[20px] roboto-bold'>{title}</h2>
            <h3 className='text-[18px] roboto-regular'>{subtitle}</h3>
        </div>
        <div className='w-[25%] h-[25px] flex items-end justify-around'>
          {/* <FontAwesomeIcon className='w-[25px] h-full' icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon className='w-[25px] h-full' icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className='w-[25px] h-full' icon={faDribbble}></FontAwesomeIcon> */}

        </div>
      
    </div>
  )
}

export default Card3
