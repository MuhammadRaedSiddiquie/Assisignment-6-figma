import React from 'react'
import Testmonial from '../Testimonial/Testmonial'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials() {
  return (
    <div className='bg-[#f7f7f7] w-full h-[130vh] flex flex-col items-center justify-center gap-[50px] max-md:h-fit max-md:py-[36px] max-md:bg-white'>
      <div className='w-[95%] h-[18%] flex flex-col items-start justify-between max-md:h-[14%] max-md:items-center'>
        <h2 className='roboto-bold text-[48px] text-start text-black max-md:text-center max-md:text-[30px] max-md:leading-[2.5rem]'>Customer Testimonials</h2>
        <p className='roboto-regular text-[18px] text-start text-black max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[90%] h-[50%] flex flex-col items-center justify-between max-md:gap-[24px]'>
        <div className='w-full h-[70%] flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          <div className='w-[7%] h-full flex items-center justify-between max-md:w-fit max-md:gap-[3px]'>
            <span className='w-[10px] h-[10px] rounded-[50%] bg-[#676767]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4]'></span>
          </div>
          <div className='w-[10%] h-full flex items-center justify-between max-md:w-fit max-md:gap-[6px]'>
            <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center'><FaArrowLeft className='text-black' /></div>
            <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center'><FaArrowRight className='text-black' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
