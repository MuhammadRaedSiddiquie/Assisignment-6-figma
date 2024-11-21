import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

function Card2({ image, subtitle, title, para }:{ image:string, subtitle:string, title:string, para:string }) {
    return (
        <div className='w-[31%] h-full flex flex-col items-center bg-[#f7f7f7]'>
            <div className='w-full h-[55%] relative'><Image className='absolute' src={image} layout='fill' alt={title}></Image></div>
            <div className='w-[95%] h-[45%] flex flex-col items-start justify-evenly px-[16px] p-b-[24px]'>
                <div className='w-[95%] flex items-center justify-between'>
                    <h4 className='text-[14px] roboto-bold'>{subtitle}</h4>
                    <div className='flex items-center gap-[2px] justify-center'><FontAwesomeIcon className='w-[20px] h-[20px]' icon={faStar}></FontAwesomeIcon><h4 className='text-[14px] roboto-regular'>5.0</h4></div>
                </div>
                <h3 className='text-[24px] roboto-bold '>{title}</h3>
                <p className='text-[16px] roboto-regular'>{para}</p>
            <div>
                <button className='w-[120px] h-[40px] rounded-[5px] flex items-center justify-center border-solid border-2 border-black px-[20px] py-[8px] text-[16px] text-black'>Enroll Now</button>
            </div>
            </div>

        </div>
    )
}

export default Card2
