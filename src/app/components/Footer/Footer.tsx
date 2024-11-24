import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-[70vh] flex flex-col items-center justify-between'>
      <div className='w-full h-[16%] bg-white flex items-start justify-between px-[10px] pt-[4px] max-md:gap-[18px] max-md:py-[18px] max-md:flex-col max-md:h-fit'>
        <div className='flex flex-col items-start justify-between h-[50%] w-[40%] max-md:items-center max-md:w-[90%] max-md:justify-center'>
          <h3 className='roboto-bold text-[18px]'>Subscribe to our newsettler</h3>
          <h4 className='roboto-regular text-[16px] max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className='w-[34%] h-[50%] flex items-start justify-between max-md:flex-col max-md:w-[100%] max-md:items-center max-md:gap-[16px]'>
          <input className='w-[300px] h-[44px] border-2 border-solid border-black rounded-[5px] p-[12px] text-[16px] roboto-regular max-md:w-full' placeholder='Enter your email' type="email" name="mail" id="eMail" />
          <button className='w-[120px] h-[44px] rounded-[5px] border-2 border-black border-solid bg-white flex items-center justify-center py-[12px] px-[24px] roboto-regular text-[16px] text-black max-md:w-full'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-[48%] flex items-start justify-between bg-white'>
        <div className='w-[23%] h-[45px] flex flex-col items-start justify-start relative'>
          <Image className='absolute !w-[60%]' src={'/images/logo.svg'} alt='logo' layout='fill'></Image>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%]'>Courses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Business</li>
            <li className='roboto-regular text-[14px]'>Development</li>
            <li className='roboto-regular text-[14px]'>Technology</li>
            <li className='roboto-regular text-[14px]'>Design</li>
            <li className='roboto-regular text-[14px]'>Programming</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%]'>Resourses</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Career</li>
            <li className='roboto-regular text-[14px]'>Resume</li>
            <li className='roboto-regular text-[14px]'>Learning</li>
            <li className='roboto-regular text-[14px]'>Interview</li>
            <li className='roboto-regular text-[14px]'>Jobs</li>
          </ul>
        </div>
        <div className='w-[23%] h-full flex flex-col items-start justify-start'>
          <h4 className='roboto-bold text-[16px] h-[20%]'>About Us</h4>
          <ul className='w-full flex flex-col items-start h-[73%] justify-between'>
            <li className='roboto-regular text-[14px]'>Contact</li>
            <li className='roboto-regular text-[14px]'>Help/Support</li>
            <li className='roboto-regular text-[14px]'>FAQ</li>
            <li className='roboto-regular text-[14px]'>Terms And Conditions</li>
            <li className='roboto-regular text-[14px]'>Partners</li>
          </ul>
        </div>
      </div>
      <div className='w-full h-[12%] bg-white border-[#f7f7f7] border-t-[3px] border-solid flex justify-between items-end'>
        <ul className='w-[45%] h-[45%] flex items-center justify-between px-[10px]'>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>2023 Ddsgnr. All right reserved.</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Privacy Policy</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Terms of Services</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular underline'>Cookies Setting</li>
        </ul>
        <div className='flex w-[10%] h-[45%] justify-between items-end'>
          <FaFacebook className='h-full w-[18%]' />
          <FaInstagram className='h-full w-[18%]' />
          <FaTwitter className='h-full w-[18%]' />
          <FaLinkedin className='h-full w-[18%]' />
        </div>
      </div>
    </div>
  )
}

export default Footer
