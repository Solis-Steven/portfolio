import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function HamburguerMenu({ menuOpen, setMenuOpen }) {
    return(
        <div className="md:hidden">

            {
                menuOpen && 
                (
                    <div
                        className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
                        onClick={() => setMenuOpen(false)}
                    />
                )
            }

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-500 dark:text-white hover:text-cyan-500 focus:outline-none z-20">
                {
                    menuOpen 
                    ? (<AiOutlineClose className="w-6 h-6" />) 
                    : (<AiOutlineMenu className="w-6 h-6" />)
                }
            </button>
        </div>
    );
}