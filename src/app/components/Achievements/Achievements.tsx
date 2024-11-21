import React from 'react'

function Achievements() {
  return (
    <div className='w-full h-[480px] flex items-center justify-center px-[66px] py-[110px]'>
      <div className='flex flex-col gap-[30px]'>
        <div className='w-full h-fit flex flex-col gap-[10px] items-center'>
          <h1 className='text-[48px] roboto-bold'>Our Achievements</h1>
          <p className='text-[18px] roboto-regular text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <ul className='w-full h-[100px] flex justify-between items-center'>
        <li className='w-[23%] h-full flex flex-col items-center'>
        <h3 className='text-[40px] roboto-bold'>+200</h3>
        <p className='text-[16px] roboto-regular'>Course</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center'>
        <h3 className='text-[40px] roboto-bold'>50K</h3>
        <p className='text-[16px] roboto-regular'>Mentors</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center'>
        <h3 className='text-[40px] roboto-bold'>+370</h3>
        <p className='text-[16px] roboto-regular'>Students</p>
        </li>
        <li className='w-[23%] h-full flex flex-col items-center'>
        <h3 className='text-[40px] roboto-bold'>+100</h3>
        <p className='text-[16px] roboto-regular'>Recognition</p>
        </li>
        </ul>

      </div>

    </div>
  )
}

export default Achievements
