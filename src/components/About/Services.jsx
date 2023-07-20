import { MdOutlineDesignServices, MdCode, MdSecurity } from "react-icons/md"


export default function Services() {
    return(
        <>
            <h3 className="text-3xl py-1 dark:text-white mt-20 text-center">My Services</h3>
            <section className="lg:flex gap-10 lg:justify-center">
                <article className="flex flex-col items-center shadow-lg p-10 rounded-xl
                my-10 bg-white hover:transform hover:scale-105 transition-all
                duration-300">
                    <MdOutlineDesignServices className="w-36 h-36"/>

                    <h3 className="text-2xl font-bold pt-8 pb-2">Beautiful Designs</h3>
                    <p className="py-2 text-center max-w-sm">
                    Let us give shape to your creative ideas and offer your users the 
                    possibility to enjoy a great experience.
                    </p>
                </article>

                <article className="flex flex-col items-center shadow-lg p-10 rounded-xl
                my-10 bg-white hover:transform hover:scale-105 transition-all
                duration-300">
                    <MdCode className="w-36 h-36"/>
                    <h3 className="text-2xl font-bold pt-8 pb-2">Good Solutions</h3>
                    <p className="py-2 text-center max-w-sm">
                    I offer customized and efficient web solutions to improve the 
                    online presence of your business, optimizing the user experience and simplifying your work.
                    </p>
                </article>

                <article className="flex flex-col items-center shadow-lg p-10 rounded-xl
                my-10 bg-white hover:transform hover:scale-105 transition-all
                duration-300">
                    <MdSecurity className="w-36 h-36"/>
                    <h3 className="text-2xl font-bold pt-8 pb-2">Security</h3>
                    <p className="py-2 text-center max-w-sm">
                    Your systems will have security in place to prevent third 
                    parties from harming your users.
                    </p>
                </article>
            </section>
        </>
    );
}