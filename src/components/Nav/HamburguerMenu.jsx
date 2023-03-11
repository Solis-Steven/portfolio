import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../../../public/animate.min.css"

export function HamburguerMenu({ menuOpen, setMenuOpen }) {
    return(
        <div className="md:hidden">

            {
                menuOpen && 
                (
                    <div
                        className="fixed inset-0 bg-gray-800 bg-opacity-70 z-10 
                        animate__animated animate__fadeInDown"
                    />
                )
            }

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-500 dark:text-white hover:text-cyan-500 focus:outline-none 
                z-40 sticky"
                aria-label="Open/Close menu">
                {
                    menuOpen 
                    ? (<AiOutlineClose className="w-6 h-6" />) 
                    : (<AiOutlineMenu className="w-6 h-6" />)
                }
            </button>
        </div>
    );
}