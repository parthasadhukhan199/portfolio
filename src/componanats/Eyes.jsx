
import { useEffect, useState } from "react";


const Eyes = () => {
    
const [size, setSize] = useState(200);
const [angle, setAngle] = useState(40);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            // console.log(e);
            const x= e.clientX;
            const y= e.clientY;
            
            const dx= x - window.innerWidth /2;
            const dy= y - window.innerHeight /2;
            
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            setAngle(angle- 180);
            
        })

      
        
    })

    useEffect(() => {
  const interval = setInterval(() => {
    setSize((prevSize) => (prevSize === 230 ? 200 : 230));
  }, 2000);

  return () => clearInterval(interval); 
}, []);
    


      
  return (
    <div className=" w-full  overflow-hidden ">
      <div data-scroll data-scroll-section data-scroll-speed="-0.25" className=" bg-zinc-700 relative w-[80vw] my-20 rounded-2xl m-auto h-[60vh]  ">
        
        <div className="  flex gap-5  top-1/2 left-1/2  -translate-x-[50%] -translate-y-[110%] absolute ">

            
             <div style={{ height: `${size}px` }} className={`flex items-center justify-center w-50  duration-1000 rounded-full bg-white `}>
                <div className=" flex items-center justify-center w-[53%] h-2/3 bg-black rounded-full">
                <div style={{transform:`rotate(${angle}deg) `}} className="line w-full h-8   ">

                    <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                </div>
            </div>
            <div style={{ height:`${size}px` }} className={`flex items-center justify-center w-50  duration-1000 rounded-full bg-white `}>
                <div className=" flex items-center justify-center w-[53%] h-2/3 bg-black rounded-full">
                <div style={{transform:`rotate(${angle}deg) `}} className="line w-full h-8  ">

                    <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Eyes
