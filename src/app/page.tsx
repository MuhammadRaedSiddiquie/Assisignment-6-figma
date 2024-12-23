import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import Course from "./components/Course/Course";
import Achievements from "./components/Achievements/Achievements";
import Explore from "./components/Explore/Explore";
import Team from "./components/Team/Team";
// import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test/Test";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[54px] bg-[#F7F7F7] mb-[15px] flex items-center justify-center border-black border-solid border-b-[1px] max-md:hidden">
        <div className="w-[90%] h-[100%] flex items-center justify-between">
          <div className="w-[34%] flex h-[34px] items-center justify-evenly text-center">
            <p className="text-sm w-[60%] border-solid border-r-[2px] border-[#676767] roboto-regular">Phone Number: 956 742 455 678</p>
            <p className="text-sm w-[45%] roboto-regular">Email:info@ddsgnr.com</p>
          </div>
          <div className="w-[66%] flex h-[34px] items-center justify-end text-center">
            <div className="w-[15%] flex items-center justify-center gap-[14px]">
              <FaFacebook className="h-full w-[22px]" />
              <FaLinkedin className="h-full w-[22px]" />
              <FaInstagram className="h-full w-[22px]" />
              <FaTwitter className="h-full w-[22px]" />

            </div>
          </div>
        </div>
      </div>
      <Header></Header>
      <Hero></Hero>
      <div className="w-full h-[228px] bg-[#f7f7f7] flex items-center justify-between px-4 max-md:overflow-hidden max-md:bg-white max-md:h-[240px] max-md:justify-center max-md:items-start max-md:px-[24px] max-md:py-[58px] max-md:flex-col">
        <div className="w-[25%] max-md:w-[90%]">
          <h2 className="text-2xl text-black roboto-bold max-md:text-[18px]">Trusted by 2000+ companies worldwide.</h2>
        </div>
        <div className="w-[70%] flex items-center justify-center max-md:w-[700px] max-md:h-[70px] ">
          <div className="w-full h-full flex items-center justify-evenly">
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-2.svg'} layout="fill" alt="logo"></Image></div>
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-3.svg'} layout="fill" alt="logo"></Image></div>
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-4.svg'} layout="fill" alt="logo"></Image></div>
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-5.svg'} layout="fill" alt="logo"></Image></div>
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-1.svg'} layout="fill" alt="logo"></Image></div>
            <div className="relative w-[15%] h-[40px] marque max-md:w-[18%]"><Image className="absolute" src={'/images/logo-6.svg'} layout="fill" alt="logo"></Image></div></div>
        </div>
      </div>
      <Explore></Explore>
      <Achievements></Achievements>
      <Course></Course>
      <Team></Team>
      {/* <Testimonials></Testimonials> */}
      <Test></Test>
      <Footer></Footer>
    </div>
  );
}
