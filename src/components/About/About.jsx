import { lazy } from 'react';
import { FaGraduationCap } from "react-icons/fa"
import { MdOutlineWork } from "react-icons/md"

const Services = lazy(() => import("./Services"));

export function About() {
    return(
        <section id="about" className="dark:bg-gray-800 p-10 md:p-20 lg:p-40">

          <div className="flex flex-col items-center md:items-start">
            <div className="dark:text-white md:grid md:grid-cols-2
            self-center">
              <div>
                <h2 className="text-3xl py-1">About me</h2>
                <div className="bg-teal-500 h-1 w-12"></div>
                
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-white
                max-w-md">
                  Hello, I'm Steven Solís, a passionate full stack developer. I love 
                  learning and working as part of a team. I'm studying computer engineering. 
                  I'm thrilled about web development and creating captivating experiences. 
                  I'm seeking new challenges to grow. I look forward to collaborating with 
                  you on exciting projects!
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
                <p className="mb-6">React - The Comlete Guide: Hooks, Context, Redux, MERN, +15 Apps</p>

                <MdOutlineWork className="inline w-8 h-8 pb-2 "/> {""}
                <h2 className="inline text-xl font-bold">Work Experience</h2>

                <p className="mt-4 font">July 2022 - April 2023</p>
                <p>Frontend developer as volunteer for an argentine foundation</p>
              </div>

            </div>
          </div>

          <Services />
        </section>
    );
}