import React from 'react'

function Achievements() {
  return (
    <div className='w-full h-[480px] bg-white flex items-center justify-center px-[66px] py-[110px] max-md:px-0 max-md:py-0 max-md:text-center'>
      <div className='flex flex-col gap-[30px]'>
        <div className='w-full h-fit flex flex-col gap-[10px] items-center max-md:gap-[24px]'>
          <h1 className='text-5xl roboto-bold text-black max-md:text-[32px]'>Our Achievements</h1>
          <p className='text-lg roboto-regular text-center text-black max-md:px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <ul className='w-full h-[100px] flex justify-between items-center max-md:flex-wrap'>
        <li className='w-[23%] h-full flex flex-col items-center max-md:w-[50%]'>
        <h3 className='text-[40px] roboto-bold text-black max-md:text-[24px]'>+200</h3>
        <p className='text-base roboto-regular text-black'>Course</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center max-md:w-[50%]'>
        <h3 className='text-[40px] roboto-bold text-black max-md:text-[24px]'>50K</h3>
        <p className='text-base roboto-regular text-black'>Mentors</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center max-md:w-[50%]'>
        <h3 className='text-[40px] roboto-bold text-black max-md:text-[24px]'>+370</h3>
        <p className='text-base roboto-regular text-black'>Students</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center max-md:w-[50%]'>
        <h3 className='text-[40px] roboto-bold text-black max-md:text-[24px]'>+100</h3>
        <p className='text-base roboto-regular text-black'>Recognition</p>
        </li>
        </ul>

      </div>

    </div>
  )
}

export default Achievements
