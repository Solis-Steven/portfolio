
export function Contact() {
    return(
        <section id="contact" className="dark:bg-gray-800 p-10 md:p-20 lg:px-40
        flex flex-col items-center justify-center">
            <h3 className="text-3xl py-1 dark:text-white">Contact me</h3>

            <div className="flex flex-col shadow-lg p-10 rounded-xl
                my-10 dark:bg-white w-11/12 sm:w-2/3">
                
                <form >
                    <div className="mb-5">
                        <label 
                            htmlFor="name"
                            className="text-gray-700 uppercase font-bold">
                            Name
                        </label>
                        <input 
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="border-2 w-full p-3 mt-2 placeholder-gray400
                            rounded-md"/>
                    </div>

                    <div className="mb-5">
                        <label 
                            htmlFor="email"
                            className="text-gray-700 uppercase font-bold">
                            Email address
                        </label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Email address to contact"
                            className="border-2 w-full p-3 mt-2 placeholder-gray400
                            rounded-md"/>
                    </div>

                    <div className="mb-5">
                        <label 
                            htmlFor="description"
                            className="text-gray-700 uppercase font-bold">
                            Description
                        </label>
                        <textarea 
                            id="description"
                            placeholder="Message with description of what you want"
                            className="border-2 w-full p-3 mt-2 placeholder-gray400
                            rounded-md"  />
                    </div>

                    <input 
                        type="submit"
                        className="bg-cyan-500 border text-gray-900 px-4 py-2 rounded-md uppercase
                        transition-colors duration-300 ease-linear
                        cursor-pointer w-28 font-bold text-lg hover:bg-cyan-600"
                        value="Send" />

                </form>
                
            </div>
        </section>
    );
}