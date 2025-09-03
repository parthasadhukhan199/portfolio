import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { GiPieceSkull } from "react-icons/gi";
import { LuBike } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";
import img1 from "../assets/WhatsApp Image 2025-07-03 at 20.05.07_2740da1c.jpg"


const Hero = () => {
        const controls = useAnimation();
    
    useEffect(() => {
      const interval = setInterval(() => {
        controls.start({
          rotate: [-10, 20],
          y: [0, -7, 0],
          x:[-30,40], // Move up and down
          transition: {
            duration: 1,            // One swing direction takes 0.6s
            ease: "anticipate",        // Smooth in and out
            repeat: Infinity,         // Repeat forever
            repeatType: "reverse",    // Go back and forth
            delay: 0,               // Small pause before starting
          },
        });
      }, 4000); // Every 4 seconds
    
      return () => clearInterval(interval);
    }, [controls]);


  return (
    <div className=" h-screen   bg-zinc-900 overflow-hidden">
        <div className="text-7xl lg:text-9xl  flex flex-col text-white pt-[10vh] pl-[2vw] font-['mona'] w-full  justify-center " >
          <div className="flex ">

            <span className="inline-block">hello !</span>
            <motion.div
            animate={controls}
            className=" z-0 bg-white text-black rounded-2xl ml-20 flex justify-end"
            >
          <GiPieceSkull className="  mx-2" />

          </motion.div>
              </div>
          <div>i create some amazing <div  className="   group flex items-center w-fit hover:w-[90vw] transition-all duration-300 bg-white text-black  rounded-2xl">looking <LuBike  className=" group-hover:ml-[45vw] ml-[2vw] transition-all duration-1000 animate-bounce " /> </div> websites</div>
        </div>
<div className="w-full z-10 absolute top-[40vh] flex justify-end px-10">
  
        <div className="mt-10  w-[30vh] h-[45vh]  hover:w-[45vh] hover:h-[55vh]  grayscale hover:grayscale-0 overflow-hidden transition-all duration-300  rounded-2xl ">
          <img src={img1} alt="" />
        </div>
</div>

        <div className=" absolute bottom-0 h-1 lg:h-15  text-white w-full  ">
          <div className="w-full h-[1px] mb-2 bg-white  bottom-7"/>
          <div className="flex justify-between pb-3 px-1">
            <div className=" hover:bg-white hover:text-black transition-all duration-300 font-['Satoshi-light'] border-[1px] border-white px-2 rounded-2xl">individual</div>
            <div className=" hover:bg-white hover:text-black transition-all duration-300 font-['Satoshi-light'] border-[1px] border-white px-2 rounded-2xl">buissness</div>
            <div className=" hover:bg-white hover:text-black transition-all duration-300 group flex items-center font-['Samarkan'] border-[1px] border-white px-2 rounded-2xl">contact <FaArrowDown className="-rotate-45 group-hover:rotate-0 transition-all duration-300" /> </div>
          </div>
        </div>
      
    </div>
  )
}

export default Hero
