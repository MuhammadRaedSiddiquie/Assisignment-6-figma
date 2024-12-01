import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";

function Testmonial({ image, name, title }: { image: string, name: string, title: string }) {
    return (
        <div className='w-[31%] h-full border-black border-2 border-solid flex flex-col p-[24px] items-center justify-center max-md:gap-[15px] max-md:w-full'>
            <div className='w-full h-[10%] flex items-start justify-start xl:h-[15%] xxl:h-[18%]'>
                <div className='w-[full] h-full flex items-center justify-start gap-[2px]'>
                <FaStar className='text-black' />
                <FaStar className='text-black' />
                <FaStar className='text-black' />
                <FaStar className='text-black' />
                <FaStar className='text-black' />
                </div>
            </div>
            <div className='w-full h-[80%] flex items-start justify-between flex-col max-md:gap-[15px] xl:h-[75%] xxl:h-[70%]'>
                <p className='roboto-regular text-[16px] text-black xl:text-[20px] xl:leading-[2rem] xxl:text-[24px] xxl:leading-[2.5rem]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros element
                    um tristique. Duis cursus, mi quis viverra ornare.&quot; </p>
                <div className='flex items-center justify-start w-full gap-[6px]'>
                    <div className='relative flex items-center justify-center rounded-[50%] w-[20%] h-full max-md:h-[50px]'>
                        <Image className='absolute' src={image} layout='fill' alt='pfp'></Image>
                    </div>
                    <div className='flex flex-col w-[70%]'>
                        <h4 className='roboto-bold text-[16px] text-black xl:text-[20px] xxl:text-[22px]'>{name}</h4>
                        <h3 className='roboto-regular text-[16px] text-black xl:text-[20px] xxl:text-[22px]'>{title}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testmonial 
