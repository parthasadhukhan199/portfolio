import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

const Snav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="p-2 z-30 fixed bottom-5 right-4 rounded-full border-1 border-white  text-8xl text-white flex items-center justify-center bg-zinc-700 overflow-hidden"
      >
        <FaPlus
          size={50}
          className={
            clicked
              ? "rotate-45 transition-all duration-300"
              : "rotate-90 transition-all duration-300"
          }
        />
      </div>
      <div
        className={`fixed right-0 w-[70vw]  h-screen ${
          clicked ? "" : "translate-x-[70vw] "
        } text-white  backdrop-blur-sm bg-gradient-to-l from-white/10 to-zinc-900/80 z-20  border  border-white/50 transition-all duration-800 rounded-l-2xl overflow-hidden`}
      >
        <div className="h-screen w-full flex flex-col items-baseline md:pl-20 pl-4 text-2xl justify-center gap-10 pt-10 font-['Satoshi']">
          <a
            className="w-full group flex font-['mona'] tracking-widest items-center gap-2"
            href="#"
          >
            <h1 className="group-hover:scale-105">Linked in.</h1>{" "}
            <CiLinkedin size={30} />
            <div className="w-0 group-hover:w-[20vw] transition-all duration-300 h-0.5 bg-amber-50 " />
          </a>
          <a
            className="w-full group flex font-['mona'] tracking-widest items-center gap-2"
            href="#"
          >
            <h1 className="group-hover:scale-105">Instagram</h1>{" "}
            <FaInstagram size={30} />
            <div className="w-0 group-hover:w-[20vw] transition-all duration-300 h-0.5 bg-amber-50 " />
          </a>
          <a
            className="w-full group flex font-['mona'] tracking-widest items-center gap-2"
            href="#"
          >
            <h1 className="group-hover:scale-105">Git Hub</h1>{" "}
            <FaGithub size={30} />
            <div className="w-0 group-hover:w-[20vw] transition-all duration-300 h-0.5 bg-amber-50 " />
          </a>

          <div className="  mt-10 group ml-[4vw] w-full">
            <a
              className="flex mt-2   items-baseline gap-1.5 font-['Samarkan']"
              href="#"
            >
              <FaRegFilePdf />
              download <span className="font-['mona'] tracking-widest">CV</span>
            </a>
            <div className="w-0 group-hover:w-[25vw] transition-all duration-300 h-0.5 bg-amber-50 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snav;
