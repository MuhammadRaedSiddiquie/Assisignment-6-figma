import React from 'react'
import Testmonial from '../Testimonial/Testmonial'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonials() {
  return (
    <div className='bg-[#f7f7f7] w-full h-[130vh] flex flex-col items-center py-[80px] justify-center gap-[50px] max-md:h-fit max-md:py-[10px] max-md:gap-[30px] max-md:bg-white'>
      <div className='w-[95%] h-[18%] flex flex-col items-start justify-center gap-[24px] max-md:h-[14%] max-md:items-center max-md:gap-[18px]'>
        <h2 className='roboto-bold text-[48px] text-start text-black max-md:text-center max-md:text-[30px] max-md:leading-[2.5rem]'>Customer Testimonials</h2>
        <p className='roboto-regular text-[18px] text-start text-black max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <Carousel className='w-[90%] h-[65%] gap-[48px] flex flex-col items-center justify-between'>
        <CarouselContent className='w-full h-[70%] flex items-center justify-between'>
          {/* <CarouselItem className='w-full h-full flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          </CarouselItem>
          <CarouselItem className='w-full h-full flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          </CarouselItem>
          <CarouselItem className='w-full h-full flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          </CarouselItem> */}
          <CarouselItem>
            <div className='w-full h-full flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          </CarouselItem>
          <CarouselItem>
            <div className='w-full h-full flex items-center justify-between max-md:flex-col max-md:gap-[24px]'>
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
          </CarouselItem>

          <CarouselPrevious></CarouselPrevious>
          <CarouselNext></CarouselNext>



        </CarouselContent>
        <div className='w-[95%] h-fit flex items-center justify-between px-[5px]'>
          <div className='w-[7%] h-full flex items-center justify-between max-md:w-fit max-md:gap-[3px]'>
            <span className='w-[10px] h-[10px] rounded-[50%] bg-[#676767] max-md:w-[8px] max-md:h-[8px]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px]'></span><span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px]'></span>
          </div>
          <div className='w-[10%] relative h-full flex items-center justify-center gap-[8px] max-md:w-fit max-md:gap-[6px]'>
            {/* <CarouselNext className='absolute w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]' /> */}
            {/* <CarouselPrevious className='absolute w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]' /> */}

            {/* <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]'><FaArrowRight className='text-black' /></div> */}
            {/* <div className='w-[50px] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]'><FaArrowLeft className='text-black' /></div> */}
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonials
