import React from 'react'
import Card2 from '../Card2/Card2'


function Course() {
  return (
    <section className='w-full h-fit bg-[#ffffff] flex flex-col justify-center items-center py-[110px] gap-[60px] max-md:py-[64px] max-md:gap-[48px] max-md:py-[48px]'>
      <div className='flex flex-col w-[66%] h-[20%] items-center justify-between max-md:text-center max-md:w-[80%] max-md:gap-[10px]'>
        <h1 className='roboto-bold text-[56px] max-md:text-[32px]'>Courses</h1>
        <p className='text-[18px] robot-regular'>Your Ultimate Guide to learning</p>
      </div>
      <div className='w-[95%] h-[1140px] flex flex-col items-center justify-between gap-[60px] max-md:h-fit'>
        <ul className='w-[40%] h-[40px] flex items-center justify-between max-md:w-[100%]'>
          <li className='h-full border-solid border-black border-b-2 roboto-regular text-[16px] px-[16px] py-[8px]'>Popular</li>
          <li className='h-full border-solid border-black roboto-regular text-[16px] px-[16px] py-[8px]'>Recommended</li>
          <li className='h-full border-solid border-black roboto-regular text-[16px] px-[16px] py-[8px]'>Best Price</li>
        </ul>
        <div className='w-full h-[38%] flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-[32px]'>
          <Card2
          image='/images/design-1.svg'
          subtitle={'Design'}
          title={'UI/UX Design 2021'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
          <Card2
          image='/images/design-2.svg'
          subtitle={'Business'}
          title={'Data Analysis For Beginners'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
          <Card2
          image='/images/design-3.svg'
          subtitle={'Art'}
          title={'Art Specialization'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
        </div>
        <div className='w-full h-[38%] flex items-center justify-between max-md:hidden'>
        <Card2
          image='/images/design-4.svg'
          subtitle={'Law'}
          title={'Rule Of Law'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
          <Card2
          image='/images/design-5.svg'
          subtitle={'Tect'}
          title={'Introduction To Webflow'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
          <Card2
          image='/images/design-6.svg'
          subtitle={'Programming'}
          title={'Introduction To Python'}
          para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'}>
          </Card2>
        </div>
        <button className='w-[150px] h-[40px] px-[8px] py-[16px] rounded-[5px] border-black border-2 roboto-regular text-black text-[16px] flex items-center justify-center'>View All Courses</button>

      </div>
      <div>
        
      </div>
      

    </section>
  )
}

export default Course
