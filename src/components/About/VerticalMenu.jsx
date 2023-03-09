import { FaGraduationCap } from "react-icons/fa"
import { BsFillBriefcaseFill } from "react-icons/bs"
import { useState } from "react";

export function VerticalMenu() {
    const [education, setEducation] = useState(true);
    const [active, setActive] = useState(true);

    const handleOnclick = (value) => {
        setEducation(value);
        setActive(value)
    }

    return(
        <section className="grid grid-cols-2 w-2/3 mt-4">
            <aside>
                <div 
                    id="agenda">
                    <ul className="border-l-2 border-black pl-3 ml-3">
                        <li className="relative group before:content-none">
                            <span className={`absolute inset-0 w-3 h-3 bg-gray-800 -left-[19px]
                            border-2 border-black rotate-45 top-1/2 -mt-2 group-hover:border-cyan-500
                            group-hover:transition-all group-hover:duration-300 group-hover:ease-linear
                            ${active ? "border-cyan-500" : ""}`}>
                            </span>
                            <button 
                                className={`block py-4 px-3 transition-all ease-linear duration-300
                                hover:text-cyan-500 ${active ? "text-cyan-500" : ""}`}
                                onClick={() => handleOnclick(true)}>
                                Educuation
                            </button>
                        </li>

                        <li className="relative group before:content-none">
                        <span className={`absolute inset-0 w-3 h-3 bg-gray-800 -left-[19px]
                            border-2 border-black rotate-45 top-1/2 -mt-2 group-hover:border-cyan-500
                            group-hover:transition-all group-hover:duration-300 group-hover:ease-linear
                            ${!active ? "border-cyan-500" : ""}`}>
                            </span>
                            <button 
                                className={`block py-4 px-3 transition-all ease-linear duration-300
                                hover:text-cyan-500 ${!active ? "text-cyan-500" : ""}`} 
                                onClick={() => handleOnclick(false)}>
                                
                                Experience
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <div>
                {
                    education
                    ? (
                        <div id="education">
                        <FaGraduationCap className="inline w-8 h-8 pb-2"/> {""}
                        <h2 className="inline text-xl font-bold">Education</h2>
                        <p className="mt-2"> 2021 - Presente</p>
                        <p>I am studying computer engineering</p>
                        </div>
                    )
                    : (
                        <div id="experience">
                        <BsFillBriefcaseFill className="inline w-8 h-8 pb-2"/> {""}
                        <h2 className="inline text-xl font-bold">Experiencie</h2>
                        <p className="mt-2"> 2022 - Presente</p>
                        <p className="">I volunteer as a frontend developer in "YvY", an application of the Plan 21 
                        foundation in partnership with IBM. </p>
                        </div>
                    )
                }
                

                
            </div>
        </section>
    );
}