import React from 'react'
import Testmonial from '../Testimonial/Testmonial'

function Testimonials() {
  return (
    <div className='bg-[#f7f7f7] w-full h-screen flex flex-col items-center justify-center gap-[60px]'>
      <div className='w-[90%] h-[18%] flex flex-col items-start justify-between'>
        <h2 className='roboto-bold text-[48px] text-start'>Customer Testimonials</h2>
        <p className='roboto-regular text-[18px] text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[90%] h-[65%] flex flex-col items-center justify-between bg-white'>
        <div className='w-full h-[70%] flex items-center justify-between'>
          <Testmonial
          image={'/images/pfp-1.svg'}
          name={'James Nkudu'}
          title={'Software Developer'}>
          </Testmonial>
          <Testmonial
          image={'/images/pfp-2.svg'}
          name={'Eric Kipsimboi'}
          title={'Scrum Master'}>
          </Testmonial>
          <Testmonial
          image={'/images/pfp-3.svg'}
          name={'Stephen Kerobu'}
          title={'UI/UX Design'}>
          </Testmonial>
        </div>
        <div className='w-full h-[15%] flex items-center justify-between px-[5px]'>
          <div className='w-[7%] h-full flex items-center justify-between'>
            <span className='w-[10px] h-[10px] rounded-[50%] bg-[#676767]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span>
          </div>
          <div className='w-[10%] h-full flex items-center justify-between'>
            <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center'></div>
            <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
