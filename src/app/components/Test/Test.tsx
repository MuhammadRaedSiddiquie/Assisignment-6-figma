'use client'
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Testmonial from '../Testimonial/Testmonial'



function Test() {
    


    return (
        <div className='w-full h-[130vh] flex flex-col items-center bg-[#f7f7f7] justify-center py-[80px] justify-center gap-[50px] max-md:h-fit max-md:py-[36px] max-md:bg-white xl:h-[125vh] xxl:h-[110vh]'>
            <div className='w-[95%] h-[18%] bg-[#f7f7f7] flex flex-col items-start justify-center gap-[24px] max-md:h-[14%] max-md:items-center'>
                <h2 className='roboto-bold text-[48px] text-start text-black max-md:text-center max-md:text-[30px] max-md:leading-[2.5rem]'>Customer Testimonials</h2>
                <p className='roboto-regular text-[18px] text-start text-black max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Carousel className='w-[90%] h-[65%] bg-[#f7f7f7] flex flex-col items-center justify-center max-md:w-[98%] max-md:gap-[24px]'>
                <CarouselContent className='w-full h-[70%] bg-[#f7f7f7] flex items-center justify-between max-md:gap-[24px] max-md:overflow-hidden'>
                    <CarouselItem className='w-full h-full bg-[#f7f7f7] flex items-center justify-between max-md:flex-col'>
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

                    <CarouselItem className='w-full h-full bg-[#f7f7f7] flex items-center justify-between max-md:flex-col'>
                        <Testmonial
                            image={'/images/pfp-3.svg'}
                            name={'James Nkudu'}
                            title={'Software Developer'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-1.svg'}
                            name={'Eric Kipsimboi'}
                            title={'Scrum Master'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-2.svg'}
                            name={'Stephen Kerobu'}
                            title={'UI/UX Design'}>
                        </Testmonial>
                    </CarouselItem>
                    
                    <CarouselItem className='w-full h-full bg-[#f7f7f7] flex items-center justify-between max-md:flex-col'>
                        <Testmonial
                            image={'/images/pfp-2.svg'}
                            name={'James Nkudu'}
                            title={'Software Developer'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-3.svg'}
                            name={'Eric Kipsimboi'}
                            title={'Scrum Master'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-1.svg'}
                            name={'Stephen Kerobu'}
                            title={'UI/UX Design'}>
                        </Testmonial>
                    </CarouselItem>

                    <CarouselItem className='w-full h-full bg-[#f7f7f7] flex items-center justify-between max-md:flex-col'>
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

                    <CarouselItem className='w-full h-full bg-[#f7f7f7] flex items-center justify-between max-md:flex-col'>
                        <Testmonial
                            image={'/images/pfp-3.svg'}
                            name={'James Nkudu'}
                            title={'Software Developer'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-1.svg'}
                            name={'Eric Kipsimboi'}
                            title={'Scrum Master'}>
                        </Testmonial>
                        <Testmonial
                            image={'/images/pfp-2.svg'}
                            name={'Stephen Kerobu'}
                            title={'UI/UX Design'}>
                        </Testmonial>
                    </CarouselItem>
                </CarouselContent>

                <div className='w-[95%] h-fit flex items-center justify-between px-[5px]'>
                    <div className='w-[7%] h-full flex items-center justify-between max-md:w-fit max-md:gap-[3px]'>
                        <span className='w-[10px] h-[10px] rounded-[50%] bg-[#676767] max-md:w-[8px] max-md:h-[8px] '></span>
                        <span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px] '></span>
                        <span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px] '></span>
                        <span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px] '></span>
                        <span className='w-[10px] h-[10px] rounded-[50%] bg-[#c4c4c4] max-md:w-[8px] max-md:h-[8px] ' ></span >
                    </div >
        <div className='w-[10%] relative h-full flex items-center justify-center gap-[8px] max-md:w-[15%] max-md:m-r-[35px] max-md:gap-[6px]'>
            <CarouselNext className='absolute w-[50px] bg-[#f7f7f7] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]' />
            <CarouselPrevious className='absolute w-[50px] bg-[#f7f7f7] h-[50px] rounded-[50%] border-2 border-black border-solid flex items-center justify-center max-md:w-[40px] max-md:h-[40px]' />
        </div>
                </div >
            </Carousel >

        </div >
    )
}

export default Test
