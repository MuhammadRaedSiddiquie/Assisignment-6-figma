import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[70vh] flex flex-col items-center justify-between bg-[#676767]'>
      <div className='w-full h-[16%] bg-white flex items-start justify-between px-[10px] pt-[4px]'>
        <div className='flex flex-col items-start justify-between h-[50%] w-[40%]'>
          <h3 className='roboto-bold text-[18px]'>Subscribe to our newsettler</h3>
          <h4 className='roboto-regular text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className='w-[34%] h-[50%] flex items-start justify-between'>
          <input className='w-[300px] h-[44px] border-2 border-solid border-black rounded-[5px] p-[12px] text-[16px] roboto-regular' placeholder='Enter your email' type="email" name="mail" id="eMail" />
          <button className='w-[120px] h-[44px] rounded-[5px] border-2 border-black border-solid bg-white flex items-center justify-center py-[12px] px-[24px] roboto-regular text-[16px] text-black'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-[44%] bg-white'></div>
      <div className='w-full h-[12%] bg-white border-[#f7f7f7] border-t-[3px] border-solid flex justify-between items-end'>
        <ul className='w-[45%] h-[45%] flex items-center justify-between'>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>2023 Ddsgnr. All right reserved.</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>Privacy Policy</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>Terms of Services</li>
          <li className='flex items-center justify-center text-[12px] roboto-regular'>Cookies Setting</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
