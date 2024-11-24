import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className='w-full h-[800px] bg-[#ffffff] flex items-center justify-center max-md:flex-col'>
      <div className='w-[50%] h-[100%] flex items-center justify-center max-md:w-full'>
        <div className='h-[38%] px-[80px] w-full flex justify-between flex-col max-md:px-[20px] max-md:gap-[24px] max-md:py-[24px] max-md:justify-center'>
          <h1 className='text-[56px] roboto-bold leading-[4rem] max-md:text-[40px] max-md:leading-[3rem]'>Learn new skills online with ease</h1>
          <p className='roboto-regular text-[18px] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className='flex items-center gap-[16px]'>
            <button className='h-[48px] w-[180px] bg-black border-solid border-2 border-black rounded-[5px] text-[16px] text-white roboto-regular'>Start learning now</button>
            <button className='h-[48px] w-[180px] bg-white border-solid border-2 border-black rounded-[5px] text-[16px] text-black roboto-regular'>Explore Courses</button>
          </div>

        </div>
      </div>
      <div className='w-[50%] h-[100%] relative max-md:w-full'>
        <Image className='absolute max-md:w-[110%] max-md:h-[110%]' src={'/images/Image.svg'} layout='fill' alt='image'></Image>
      </div>
    </section>
  )
}

export default Hero
