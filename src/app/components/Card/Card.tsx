import React from 'react'
import Image from 'next/image'



function Card({image,title,subtitle}:{image:string,title:string,subtitle:string}) {
    return (
        <div className='w-[32%] h-full bg-[#f7f7f7] flex gap-[32px] items-center justify-between p-[16px] hover:shadow-[0_6px_15px_0_#e6e3e3] max-md:w-[95%] max-md:h-[23%] max-md:gap-[16px]'>
            <div className='w-[100px] h-[100px] relative'><Image src={image} layout='fill' alt={title}></Image></div>
            <div className='w-[70%] h-[60px] flex flex-col justify-between max-md:h-[80%] max-md:justify-center max-md:w-[80%]'>
                <h3 className='text-[20px] text-black roboto-bold '>{title}</h3>
                <h4 className='text-[18px] text-black roboto-regular'>{subtitle}</h4>
            </div>
        </div>
    )
}

export default Card
