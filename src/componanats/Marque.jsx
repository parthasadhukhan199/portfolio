import { motion } from "framer-motion";

const Marquee = () => {
  return (
      <div data-scroll data-scroll-section data-scroll-speed="-.1" className=" py-3 z-20  w-full h-[40vw] lg:h-[25vw]  flex items-center bg-zinc-700 rounded-t-xl  overflow-hidden font-['Samarkan'] text-white">
      <div className="text border-t-2 border-b-2 flex py-10  whitespace-nowrap border-white">
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-8xl lg:text-[12vw]  px-[2vw]  font-extrabold">
          partha sarathi sadhukhan{" "}
        </motion.h1>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-8xl lg:text-[12vw]  px-[2vw]  font-extrabold">
          partha sarathi sadhukhan{" "}
        </motion.h1> 
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", duration:10 ,repeat:Infinity  }}  className="text-8xl lg:text-[12vw]  px-[2vw]  font-extrabold">
          partha sarathi sadhukhan{" "}
        </motion.h1> 

      </div>
      </div>
  );
};

export default Marquee;
