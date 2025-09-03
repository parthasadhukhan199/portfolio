import { useEffect, useState } from "react";

import Hero from "./componanats/Hero"
import Nav from "./componanats/Nav"
import Snav from "./componanats/Snav"
import Startup from "./componanats/Startup"
import Marque from "./componanats/Marque";
import Eyes from "./componanats/Eyes";
import Projects from "./componanats/Projects";


const App = () => {

   const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Startup/>
      {showMainContent && (
        <>
          <Nav />
          <Snav />
          <Hero />
          <Marque/>
          <Eyes/>
          <Projects/>
        </>
      )}

      
    </div>
  )
}

export default App
