import { Services } from "./Services";
import { VerticalMenu } from "./VerticalMenu";

export function About() {
    return(
        <section className="dark:bg-gray-800 p-10 md:p-20 lg:p-40">
          <div className="dark:text-white md:grid md:grid-cols-2">
            <div>
              <h3 className="text-3xl py-1 ">About me</h3>
              <div className="bg-teal-500 h-1 w-12"></div>
              <VerticalMenu />
              
            </div>

            <div>
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
          </div>

          <Services />
        </section>
    );
}