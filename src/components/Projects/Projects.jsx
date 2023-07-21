import { Project } from "./Project";
import yvy from "/assets/yvy.webp";
import portfolio from "/assets/portfolio.webp";
// import projects from "./projects.json";

export default function Projects() {
    return(
        <section id="portfolio" className="py-10 md:py-16 lg:py-20 px-10 md:px-20 lg:px-40 mt-10 mb-20 ">
          <h2 className="text-3xl py-1 dark:text-white">My Projects</h2>

          <div className="flex mt-5 justify-center">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

              {/* {
                projects.map((project, index) => (
                  <Project 
                    key={index}
                    image={project.image}
                    alt={project.alt}
                    name={project.name}
                    href={project.href}
                    description={project.description}
                  />
                ))
              } */}

              <Project 
                image={yvy}
                alt="Image of YvY application"
                name="YvY"
                href="https://yvyapp.plan21.org/"
                description="YvY is a platform for farmers where you can know data such as carbon footprint calculation, irrigation needs, among many other things."
              />

              <Project 
                image={portfolio}
                alt="Image of my portfolio"
                name="My Portfolio"
                href="#"
                description="This portfolio was built only using React and Tailwind CSS, and here you can see my experience and get in contact with me."
              />

            </div>
          </div>

        </section>
    );
}