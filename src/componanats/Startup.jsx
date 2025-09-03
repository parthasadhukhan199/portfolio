import { motion } from "motion/react";
import { GiPieceSkull } from "react-icons/gi";
import { useEffect, useState } from "react";
import { GiPentagramRose } from "react-icons/gi";

const Startup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, height: "100vh",  }}
      animate={{ opacity: 1, height:0 }}
      transition={{ duration: 1, delay: 3.5 ,ease:"anticipate"}}
      className=" fixed z-50  font-['mona'] font-extrabold flex  flex-col items-center justify-center h-screen w-screen lg:text-8xl text-5xl gap-y-3.5 bg-zinc-900 text-white overflow-hidden"
    >
      {["Fullstack", "developer ", "partha..."].map((word, index) => {
        return (
          <>
            {index === 1 ? (
              <>
                <div key={index} className=" tracking-normal ">
                  <motion.div
                    initial={{ opacity: 1, width: 0, x: -100 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      width: isMobile ? 70 : 200,
                      y: [0, 20, 0],
                    }}
                    transition={{
                      delay: 1.4,
                      duration: 0.7,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    className="w-[30vw] h-[10vw] bg-white text-black inline-block mx-3 rounded-2xl overflow-hidden"
                  >
                    <GiPieceSkull size={ isMobile? 45 :100} className="inline-block text-black" />
                    <GiPentagramRose  size={70} className="inline-block animate-spin text-black"  />
                  </motion.div>
                  {word}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 1, x: isMobile?-50: -100, width: 0 }}
                animate={{ opacity: 1, x: isMobile?-50: -100 , width: "fit-content" }}
                transition={{ delay: index * 0.7, duration: 0.7 }}
                key={index}
                className={`lg:h-[6rem] tracking-normal ${index === 2 ? "font-['Samarkan'] font-8xl" : ""} overflow-hidden inline-block`}
              >
                {word}
              </motion.div>
            )}
          </>
        );
    })}
    {isMobile ?(<> <GiPentagramRose  size={50} className="inline-block absolute bottom-0  animate-spin text-white"  /></>):(<><div/></>)}
    </motion.div>
  );
};

export default Startup;
