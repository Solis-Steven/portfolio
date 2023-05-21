
export function Project({
    image, alt, name, href, description, children
}) {
    return(
        <div className="group relative cursor-pointer items-center justify-center bg-white
        overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 p-4 rounded-md">

            <div className="h-36 w-full">
                <img 
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 
                hover:rotate-3" 
                src={image} 
                alt={alt} />
            </div>
            <div className="flex flex-col items-center h-full">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="my-2">{description}</p>
                <div className="flex">
                    {children}
                </div>
                <a 
                    href={href}
                    className="rounded-full bg-cyan-400 py-2 px-3 text-sm capitalize text-gray-900 
                    hover:bg-cyan-500 hover:transition-all hover:duration-300 hover:ease-linear
                    mt-2"
                    aria-label="More information about my frontend development project experience"
                    target="_blank">
                    Learn more about this project
                </a>
            </div>
    
        </div>
    );
}