import { AiFillLinkedin } from "react-icons/ai";
import me  from '../../assets/me.jpg';

export function MainContent() {
    return(
        <>
            <img 
                src={me} 
                alt="avatar"
                className="bg-teal-500 rounded-full w-60 h-60 mt-20
                object-cover mx-auto md:h-80 md:w-80 lg:h-96 lg:w-96" />
            
            <div className="text-center p-5">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Steven Solis</h2>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto
                dark:text-white">
                A frontend devoleper happy to help you with your programming and content design needs. 
                Contact me and let's get to work!
                </p>
            </div>

            <div className="text-5xl flex justify-center cursor-pointer text-gray-600
            dark:text-white">
                <AiFillLinkedin className="mb-5"/>
            </div>

        </>
    );
}