import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

function Card2({ image, subtitle, title, para }:{ image:string, subtitle:string, title:string, para:string }) {
    return (
        <div className='w-[31%] h-full flex flex-col items-center bg-[#f7f7f7] max-md:w-[95%] max-md:h-[480px]'>
            <div className='w-full h-[55%] relative max-md:h-[50%]'><Image className='absolute' src={image} layout='fill' alt={title}></Image></div>
            <div className='w-[95%] h-[45%] flex flex-col items-start justify-evenly px-[16px] p-b-[24px]'>
                <div className='w-[95%] flex items-center justify-between'>
                    <h4 className='text-[14px] roboto-bold text-black'>{subtitle}</h4>
                    <div className='flex items-center gap-[2px] justify-center'>
                        <FaStar className='text-black hover:text-[#ffc107]'  />
                        <h4 className='text-[14px] roboto-regular text-black'>5.0</h4></div>
                </div>
                <h3 className='text-[24px] roboto-bold text-black'>{title}</h3>
                <p className='text-[16px] roboto-regular text-black'>{para}</p>
            <div>
                <button className='w-[120px] h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black hover:bg-black hover:text-white duration-[500ms] max-md:w-[126px]'>Enroll Now</button>
            </div>
            </div>

        </div>
    )
}

export default Card2
