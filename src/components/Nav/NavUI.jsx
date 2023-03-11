import { useState, useEffect   } from "react";
import { NavElement } from "./NavElement";
import { HamburguerMenu } from "./HamburguerMenu";
import { DarkMode } from "./DarkMode";
import "../../../public/animate.min.css";

export function NavUI({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`py-5 mb-12 px-10 md:px-20 lg:px-40 
    flex justify-between sticky top-0 z-20 ${scrollY 
    ? "transition-all duration-300 ease-linear bg-black bg-opacity-50"
    : "transition-all duration-300 ease-linear"}`}>

      <h1 className={`text-xl font-bold dark:text-white duration-300 ease-linear
      ${scrollY > 10 && !darkMode ? "text-white" : ""}
      ${menuOpen ? "opacity-0 pointer-events-none" : ""}`}>
        Frontend <span className="text-teal-500"> Developer</span>
      </h1>

      <div className="flex items-center md:justify-center">

        <DarkMode 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          scrollY={scrollY}/>

        <ul
          className={`${
            menuOpen 
            ? "flex flex-col justify-center fixed inset-0 items-center gap-8 animate__animated animate__fadeInDown" 
            : "hidden"
          } md:flex md:flex-row md:items-center w-full md:w-auto justify-center z-20`}
        >

          <NavElement 
            text={"About me"} 
            id={"#about"}
            scrollY={scrollY}
            darkMode={darkMode} 
            setMenuOpen={setMenuOpen}/>
          <NavElement 
            text={"Portfolio"} 
            id={"#portfolio"}
            scrollY={scrollY}
            darkMode={darkMode} 
            setMenuOpen={setMenuOpen}/>
          <NavElement 
            text={"Contact"} 
            id={"#contact"}
            scrollY={scrollY}
            darkMode={darkMode} 
            setMenuOpen={setMenuOpen}/>

          <li>
            <a
              href="#"
              className="border-cyan-500 border text-cyan-500 px-4 py-2 rounded-md ml-8
            hover:text-white hover:bg-cyan-500 transition-colors duration-300 ease-linear"
            >
              Resume
            </a>
          </li>

        </ul>

        <HamburguerMenu 
          menuOpen={ menuOpen } 
          setMenuOpen={setMenuOpen} />
        
      </div>
    </nav>
  );
}