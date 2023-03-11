import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function DarkMode({darkMode, setDarkMode, scrollY}) {
    return(
        <div className="hidden md:block">
            {
                !darkMode 
                ? (
                <BsFillMoonFill
                onClick={() => setDarkMode(!darkMode)}
                className={`cursor-pointer text-2xl ml-4 duration-300 ease-linear 
                ${scrollY > 10 ? "text-white" : ""}`}
                />) 

                : (
                <BsFillSunFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl ml-4 text-yellow-500"
                />)
            }
        </div>
    );
}