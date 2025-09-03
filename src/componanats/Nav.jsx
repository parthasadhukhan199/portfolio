
import { useEffect, useState } from "react";



const Nav = () => {





  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed  ${show ? "translate-y-0" : "-translate-y-full"} z-20 transition-all duration-500 flex w-full border-b-[1px] border-white/70 rounded-b-xl  lg:h-[5rem] h-[5vh]  backdrop-blur-sm bg-gradient-to-l from-white/10 to-zinc-900/80 items-center  md:gap-x-10 gap-5   md:text-xl  md:justify-end justify-between lg:px-10 px-[10vw] tracking-widest text-white font-['mona']`}>

        <div className=" hidden group md:flex items-center w-full text-5xl font-['Samarkan'] text-white">
          
            partha
            
        </div>
        
        <a className="group hover:scale-120 transition-all duration-300" href="#"> Home <div className="w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-amber-50 "></div></a>
        <a className="group hover:scale-120 transition-all duration-300" href="#"> Projects <div className="w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-amber-50 "></div></a>
        <a className="group hover:scale-120 transition-all duration-300" href="#"> Skills <div className="w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-amber-50 "></div></a>
        <a className="group hover:scale-120 transition-all duration-300" href="#"> About <div className="w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-amber-50 "></div></a>
        

    </div>
  )
}

export default Nav
