import React from 'react'
import Image from 'next/image'

function Testmonial({ image, name, title }: { image: string, name: string, title: string }) {
    return (
        <div className='w-[31%] h-full border-black border-2 border-solid flex flex-col p-[24px] items-center justify-between'>
            <div className='w-full h-[10%] flex items-start justify-center'></div>
            <div className='w-full h-[80%] flex items-start justify-between flex-col'>
                <p className='roboto-regular text-[16px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros element
                    um tristique. Duis cursus, mi quis viverra ornare."</p>
                <div className='flex items-center justify-start w-full gap-[6px]'>
                    <div className='relative flex items-center justify-center rounded-[50%] w-[20%] h-full'>
                        <Image className='absolute' src={image} layout='fill' alt='pfp'></Image>
                    </div>
                    <div className='flex flex-col w-[70%]'>
                        <h4 className='roboto-bold text-[16px]'>{name}</h4>
                        <h3 className='roboto-regular text-[16px]'>{title}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testmonial 