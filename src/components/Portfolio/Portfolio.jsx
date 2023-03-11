import yvy from "../../assets/yvy.webp";
import portfolio from "../../assets/portfolio.webp";

export default function Portfolio() {
    return(
        <section id="portfolio" className="py-10 md:py-16 lg:py-20 px-10 md:px-20 lg:px-40 mt-10 mb-20 ">
          <h2 className="text-3xl py-1 dark:text-white">Portfolio</h2>

          <div className="flex mt-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

              <div className="group relative cursor-pointer items-center justify-center 
              overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-full">
                  <img 
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 
                    group-hover:rotate-3 group-hover:scale-125" 
                    src={yvy} 
                    alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent
                 to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center 
                px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-3xl font-bold text-white">
                    YvY
                  </h3>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 
                  group-hover:opacity-100">
                    YvY is a platform for farmers where you can know data such as carbon footprint calculation, 
                    irrigation needs, among many other things.
                  </p>
                  <a 
                    href="https://yvyapp.plan21.org/" 
                    className="rounded-full bg-cyan-500 py-2 px-3.5 font-com text-sm capitalize text-white hover:bg-cyan-600 hover:transition-all hover:duration-300 hover:ease-linear"
                    aria-label="More information about my frontend development project experience"
                  >
                    Learn more about this project
                  </a>
                </div>
              </div>

              <div className="group relative cursor-pointer items-center justify-center 
              overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-full">
                  <img 
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 
                    group-hover:rotate-3 group-hover:scale-125" 
                    src={portfolio} 
                    alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent
                 to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center 
                px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-3xl font-bold text-white">
                    My Portfolio
                  </h3>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 
                  group-hover:opacity-100">
                    I built my own portfolio with React and Tailwindcss
                  </p>
                </div>
              </div>

            </div>
          </div>

        </section>
    );
}