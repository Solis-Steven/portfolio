import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function Nav({darkMode, setDarkMode}) {
    return(
        <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold dark:text-white " >Frontend <span className="text-teal-500"> Developer</span></h1>

            <ul className="flex items-center">

                <li>
                    {
                    !darkMode 
                    ? (<BsFillMoonFill 
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"/>)
                    : (<BsFillSunFill 
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-yellow-500" />)
                    }
                </li>

                <li>
                    <a 
                        href="#"
                        className="dark:text-white ml-4 hover:text-cyan-500 dark:hover:text-cyan-500
                        duration-300 ease-linear"> 
                        About me
                    </a>
                </li>

                <li>
                    <a 
                        href="#"
                        className="dark:text-white ml-4 hover:text-cyan-500 dark:hover:text-cyan-500
                        duration-300 ease-linear"> 
                        Portfolio
                    </a>
                </li>

                <li>
                    <a 
                        href="#"
                        className="dark:text-white ml-4 hover:text-cyan-500 dark:hover:text-cyan-500
                        duration-300 ease-linear"> 
                        Contact
                    </a>
                </li>

                <li>
                    <a 
                        href="#"
                        className="border-cyan-500 border text-cyan-500 px-4 py-2 rounded-md ml-8
                        hover:text-white hover:bg-cyan-500 transition-colors duration-300 ease-linear"> 
                        Resume
                    </a>
                </li>

            </ul>
          </nav>
    );
}