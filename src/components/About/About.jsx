import { lazy } from 'react';
import { FaGraduationCap } from "react-icons/fa"
const Services = lazy(() => import("./Services"));

export function About() {
    return(
        <section id="about" className="dark:bg-gray-800 p-10 md:p-20 lg:p-40">

          <div className="flex flex-col items-center md:items-start">
            <div className="dark:text-white md:grid md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-3xl py-1">About me</h2>
                <div className="bg-teal-500 h-1 w-12"></div>
                
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-white
                max-w-md">
                My name is Steven Solis, I'm 19 years old and I'm a frontend developer. 
                I like to be constantly learning and I love working in a team. I study computer 
                engineering but I also like data science.
                </p>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-white
                max-w-md">
                If you have any offers or are interested in working with me, you can contact me below, 
                I will be excited to take on new challenges.
                </p>
                
              </div>

              <div className="md:ml-4">
                <FaGraduationCap className="inline w-8 h-8 pb-2"/> {""}
                <h2 className="inline text-xl font-bold">Education</h2>

                <p className="mt-4 font">2021 - Presente</p>
                <p>I am studying computer engineering</p>

                <p className="mt-4">2022</p>
                <p>Modern JavaScript Definitive Guide Build +20 Projects</p>

                <p className="mt-4">2023</p>
                <p>React - The Comlete Guide: Hooks, Context, Redux, MERN, +15 Apps</p>

              </div>
            </div>
          </div>

          <Services />
        </section>
    );
}