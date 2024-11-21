import React from 'react'
import Image from 'next/image'



function Card({image,title,subtitle}:{image:string,title:string,subtitle:string}) {
    return (
        <div className='w-[32%] h-full bg-[#f7f7f7] flex gap-[32px] items-center justify-between p-[16px]'>
            <div className='w-[100px] h-[100px] relative'><Image src={image} layout='fill' alt={title}></Image></div>
            <div className='w-[70%] h-[60px] flex flex-col justify-between'>
                <h3 className='text-[20px] roboto-bold '>{title}</h3>
                <h4 className='text-[18px] roboto-regular'>{subtitle}</h4>
            </div>
        </div>
    )
}

export default Card
