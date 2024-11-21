import React from 'react'
import Card from '../Card/Card'


function Explore() {
  return (
    <div className='w-full h-fit bg-white flex flex-col gap-[80px] items-center justify-center py-[110px]'>
      <div className='flex flex-col w-[66%] h-[20%] items-center justify-between'>
        <h1 className='roboto-bold text-[48px]'>Explore Courses By Category</h1>
        <p className='roboto-regular text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className='w-full h-[610px] flex flex-col justify-between px-2'>
        <div className='w-full h-[20%] flex items-center justify-between'>
        <Card
          image='/images/frame-1.svg'
          title='Design & Development'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-2.svg'
          title='Marketing'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-3.svg'
          title='Development'
          subtitle='50+ Courses Available'>
          </Card>
        </div>
        <div className='w-full h-[20%]  flex items-center justify-between'>
          <Card
          image='/images/frame-4.svg'
          title='Communication'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-5.svg'
          title='Digital Marketing'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-6.svg'
          title='Self Development'
          subtitle='50+ Courses Available'>
          </Card>
        </div>
        <div className='w-full h-[20%]  flex items-center justify-between'>
          <Card
          image='/images/frame-7.svg'
          title='Business'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-8.svg'
          title='Finance'
          subtitle='50+ Courses Available'>
          </Card>
          <Card
          image='/images/frame-9.svg'
          title='Consulting'
          subtitle='50+ Courses Available'>
          </Card>
        </div>
        <div className='w-full h-[20%] flex items-center justify-center'>
          <button className='w-[150px] h-[50px] px-[12px] py-[24px] rounded-[5px] border-black border-2 roboto-regular text-black text-[16px] flex items-center justify-center'>View All Courses</button>
        </div>

      </div>
    </div>
  )
}

export default Explore
