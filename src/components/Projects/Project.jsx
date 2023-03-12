
export function Project() {
    return(
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
                className="rounded-full bg-cyan-400 py-2 px-3 text-sm capitalize text-gray-900 
                hover:bg-cyan-500 hover:transition-all hover:duration-300 hover:ease-linear"
                aria-label="More information about my frontend development project experience"
                >
                Learn more about this project
                </a>
            </div>
        </div>
    );
}