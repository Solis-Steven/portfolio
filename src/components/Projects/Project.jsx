import { useEffect } from "react";

export function Project({
    image, alt, name, href, description
}) {

    return(
        <section className="max-w-sm bg-white border border-gray-200 rounded-lg shadow
        transition-all duration-300 hover:-translate-y-3 hover:cursor-pointer group">
            <img className="rounded-t-lg" src={`${image}`} alt={alt} />

            <article className="p-5 flex flex-col items-baseline">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
                group-hover:border-b-2 group-hover:border-b-teal-500" >
                    {name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {description}
                </p>
                <a 
                    href={`${href}`} 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
                    text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 
                    focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 
                    dark:focus:ring-teal-800 transition-colors duration-300">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </article>
        </section>
    );
}