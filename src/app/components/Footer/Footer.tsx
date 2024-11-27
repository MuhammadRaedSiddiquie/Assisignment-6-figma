import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-[70vh] flex flex-col items-center justify-between max-md:h-fit'>
      <div className='w-full h-[16%] bg-white flex items-start justify-between px-[10px] pt-[4px] max-md:gap-[18px] max-md:py-[18px] max-md:flex-col max-md:h-fit'>
        <div className='flex flex-col items-start justify-between h-[50%] w-[40%] max-md:items-center max-md:w-[90%] max-md:justify-center'>
          <h3 className='roboto-bold text-[18px] text-black'>Subscribe to our newsettler</h3>
          <h4 className='roboto-regular text-[16px] text-black max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className='w-[34%] h-[50%] flex items-start justify-between max-md:flex-col max-md:w-[100%] max-md:items-center max-md:gap-[16px]'>
          <input className='w-[300px] h-[44px] border-2 border-solid border-black rounded-[5px] p-[12px] text-[16px] roboto-regular max-md:w-full' placeholder='Enter your email' type="email" name="mail" id="eMail" />
          <button className='w-[120px] h-[44px] rounded-[5px] border-2 border-black border-solid bg-white flex items-center justify-center py-[12px] px-[24px] roboto-regular text-[16px] text-black max-md:w-full'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-[48%] flex items-start justify-between bg-white max-md:flex-col max-md:items-center'>
        <div className='w-[23%] h-[45px] flex flex-col items-start justify-start relative max-md:my-4 max-md:w-[90%] max-md:items-center max-md:justify-center max-md:'>
          <Image className='absolute w-[60%]' src={'/images/logo.svg'} alt='logo' layout='fill'></Image>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start max-md:h-fit max-md:items-center max-md:w-[80%] max-md:py-[10px]'>
          <h4 className='roboto-bold text-[16px] h-[20%] text-black'>Courses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between max-md:h-[210px] max-md:items-center max-md:justify-around'>
            <li className='roboto-regular text-[14px] text-black'>Business</li>
            <li className='roboto-regular text-[14px] text-black'>Development</li>
            <li className='roboto-regular text-[14px] text-black'>Technology</li>
            <li className='roboto-regular text-[14px] text-black'>Design</li>
            <li className='roboto-regular text-[14px] text-black'>Programming</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start max-md:h-fit max-md:items-center max-md:w-[80%] max-md:py-[10px]'>
          <h4 className='roboto-bold text-[16px] h-[20%] text-black'>Resourses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between max-md:h-[210px] max-md:items-center max-md:justify-around'>
            <li className='roboto-regular text-[14px] text-black'>Career</li>
            <li className='roboto-regular text-[14px] text-black'>Resume</li>
            <li className='roboto-regular text-[14px] text-black'>Learning</li>
            <li className='roboto-regular text-[14px] text-black'>Interview</li>
            <li className='roboto-regular text-[14px] text-black'>Jobs</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start max-md:h-fit max-md:items-center max-md:w-[80%] max-md:py-[10px]'>
          <h4 className='roboto-bold text-[16px] h-[20%] text-black'>About Us</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between max-md:h-[210px] max-md:items-center max-md:justify-around'>
            <li className='roboto-regular text-[14px] text-black'>Contact</li>
            <li className='roboto-regular text-[14px] text-black'>Help/Support</li>
            <li className='roboto-regular text-[14px] text-black'>FAQ</li>
            <li className='roboto-regular text-[14px] text-black'>Terms And Conditions</li>
            <li className='roboto-regular text-[14px] text-black'>Partners</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[12%] bg-white border-[#f7f7f7] border-t-[3px] border-solid flex justify-between items-end max-md:flex-col max-md:items-center max-md:gap-[24px] max-md:py-[24px] max-md:h-fit max-md:border-black'>
        <ul className='w-[45%] h-[45%] flex items-center justify-between px-[10px] max-md:w-[95%] max-md:flex-wrap'>
          <li className='flex items-center justify-center text-[12px] roboto-regular text-black max-md:text-[14px] max-md:my-[12px] max-md:w-[100%]'>2023 Ddsgnr. All right reserved.</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular text-black max-md:text-[14px] underline'>Privacy Policy</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular text-black max-md:text-[14px] underline'>Terms of Services</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular text-black max-md:text-[14px] underline'>Cookies Setting</li>
        </ul>
        <div className='flex w-[10%] h-[45%] justify-between items-end max-md:w-[30%]'>
          <FaFacebook className='h-full w-[18%] text-black' />
          <FaInstagram className='h-full w-[18%] text-black' />
          <FaTwitter className='h-full w-[18%] text-black' />
          <FaLinkedin className='h-full w-[18%] text-black' />
        </div>
      </div>
    </div>
  )
}

export default Footer
