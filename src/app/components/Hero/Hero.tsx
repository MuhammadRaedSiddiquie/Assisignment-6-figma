import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='w-full h-[800px] bg-[#ffffff] flex items-center justify-center'>
      <div className='w-[50%] h-[100%] flex items-center justify-center'>
        <div className='h-[38%] px-[80px] w-full flex justify-between flex-col'>
          <h1 className='text-[56px] roboto-bold leading-[4rem]'>Learn new skills online with ease</h1>
          <p className='roboto-regular text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className='flex items-center gap-[16px]'>
            <button className='h-[48px] w-[180px] bg-black border-solid border-2 border-black rounded-[5px] text-[16px] text-white roboto-regular'>Start learning now</button>
            <button className='h-[48px] w-[180px] bg-white border-solid border-2 border-black rounded-[5px] text-[16px] text-black roboto-regular'>Explore Courses</button>
          </div>

        </div>
      </div>
      <div className='w-[50%] h-[100%] relative'>
        <Image className='absolute' src={'/images/Image.svg'} layout='fill' alt='image'></Image>
      </div>
    </section>
  )
}

export default Hero
