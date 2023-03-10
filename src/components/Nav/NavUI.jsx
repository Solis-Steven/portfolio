import { useState, useEffect   } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function NavUI({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  const handleNavigationClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`py-5 mb-12 px-10 md:px-20 lg:px-40 
    flex justify-between sticky top-0 z-40 ${scrollY 
    ? "transition duration-3000 ease-linear bg-black bg-opacity-50"
    : "transition-all duration-3000 ease-linear"}`}>
      <h1 className={`text-xl font-bold dark:text-white duration-300 ease-linear
      ${scrollY > 10 && !darkMode ? "text-white" : ""}`}>
        Frontend <span className="text-teal-500"> Developer</span>
      </h1>

      <div className="flex items-center md:justify-center">

      `<div className="hidden md:block">
          {!darkMode ? (
            <BsFillMoonFill
              onClick={() => setDarkMode(!darkMode)}
              className={`cursor-pointer text-2xl ml-4 duration-300 ease-linear 
              ${scrollY > 10 ? "text-white" : ""}`}
            />
          ) : (
            <BsFillSunFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl ml-4 text-yellow-500"
            />
          )}
        </div>

        {/* capa para oscurecer el fondo */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <ul
          className={`${
            menuOpen 
            ? "flex flex-col h-screen justify-center z-20 fixed inset-0 items-center gap-8" 
            : "hidden"
          } md:flex md:flex-row md:items-center w-full md:w-auto justify-center z-20`}
        >

          <li>
            <a
              href="#about"
              onClick={handleNavigationClick}
              className={`ml-4 text-white hover:text-cyan-500 dark:hover:text-cyan-500
              duration-300 ease-linear ${scrollY < 10 && !darkMode ? "text-black" : ""}`}
            >
              About me
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              onClick={handleNavigationClick}
              className={`ml-4 text-white hover:text-cyan-500 dark:hover:text-cyan-500
              duration-300 ease-linear ${scrollY < 10 && !darkMode ? "text-black" : ""}`}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={handleNavigationClick}
              className={`ml-4 text-white hover:text-cyan-500 dark:hover:text-cyan-500
              duration-300 ease-linear ${scrollY < 10 && !darkMode ? "text-black" : ""}`}
            >
              Contact
            </a>
          </li>

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

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 dark:text-white hover:text-cyan-500 focus:outline-none"
          >
            {menuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}