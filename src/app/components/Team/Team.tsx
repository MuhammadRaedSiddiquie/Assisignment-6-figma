import React from 'react'
import Card3 from '../Card3/Card3'


function Team() {
  return (
    <div className='bg-[#f7f7f7] w-full h-[130vh] flex flex-col items-center justify-between py-[80px]'>
      <div className='flex flex-col w-[66%] h-[16%] items-center justify-between'>
        <h1 className='roboto-bold text-[48px]'>Our Team</h1>
        <p className='roboto-regular text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className='w-full h-[74%] flex flex-col items-center justify-between gap-[40px]'>
        <div className='w-full h-[50%] flex items-center justify-evenly'>
          <Card3
          image={'/images/person-1.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>
          <Card3
          image={'/images/person-2.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>
          <Card3
          image={'/images/person-3.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>

        </div>
        <div className='w-full h-[50%] flex items-center justify-evenly'>
          <Card3
          image={'/images/person-4.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>
          <Card3
          image={'/images/person-5.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>
          <Card3
          image={'/images/person-6.svg'}
          title={'James Nkudu'}
          subtitle={'Marketing Coordinator'}></Card3>

        </div>
      </div>
    </div>
  )
}

export default Team
