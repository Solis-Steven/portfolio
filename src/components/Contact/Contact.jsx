import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        if([name.trim(), email.trim(), message.trim()].includes("")) {
            toast.error("All fields are required");
            return;
        }
        
        emailjs.sendForm(
                        `${import.meta.env.VITE_SERVICE_ID}`, 
                        `${import.meta.env.VITE_TEMPLATE_ID}`, 
                        form.current, 
                        `${import.meta.env.VITE_PUBLIC_KEY}`)
          
        .then((result) => {
            toast.success("Email sent successfully");
            setName("");
            setEmail("");
            setMessage("");
          }, (error) => {
            toast.error("There was an error sending the email")
          });
      };
      

    return(
        <section id="contact" className="dark:bg-gray-800 p-10 md:p-20 lg:px-40
        flex flex-col items-center justify-center">
            <h3 className="text-3xl py-1 dark:text-white">Contact me</h3>

            <div className="flex flex-col shadow-lg p-10 rounded-xl
                my-10 bg-white w-11/12 sm:w-2/3">

                <form ref={form} onSubmit={sendEmail}>
                    <label 
                        htmlFor="name"
                        className="text-gray-700 uppercase font-bold">Name</label>
                    <input 
                        id='name'
                        type="text" 
                        name="user_name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your name"
                        className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md mb-5"/>
                   
                    <label
                        htmlFor="email" 
                        className="text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        name="user_email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="border-2 w-full p-3 mt-2 placeholder-gray-400 rounded-md mb-5" />
                   
                    <label 
                        htmlFor="message"
                        className="text-gray-700 uppercase font-bold">Message</label>
                    <textarea 
                        id="message"
                        name="message" 
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="What do you want to say?"
                        className="border-2 w-full p-3 mt-2 placeholder-gray-400
                    rounded-md mb-5" />
                   
                    <input 
                        type="submit" 
                        value="Send" 
                        className="bg-cyan-500 border text-gray-900 px-4 py-2 rounded-md mb-5 
                        uppercase transition-colors duration-300 ease-linear cursor-pointer w-28 
                        font-bold text-lg hover:bg-cyan-600" />
                </form>
                
            </div>
        </section>
    );
}