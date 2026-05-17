import { FaRegHandshake } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { RiGithubFill } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { FaRegThumbsUp } from "react-icons/fa6";


export function Contact() {
    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm({mode: 'onChange'});

    const [emailSent, setEmailSent] = useState(false);

    const email = watch("email", "");
    const name = watch("name", "");

    const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isValidName = name.length > 0;

    const sendMessage = async (data) => {
        
        const name = data.name;
        const message = data.message;
        const emails = data.email;
        console.log("name: ", name, " message: ", message, " email: ", emails);
        
        try {
            console.log("inside try");
            emailjs
            .send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: name,
                    from_email: emails,
                    html_message: message,
                },
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY
                }
            )
            .then(
                (result) => {
                    setEmailSent(true);
                    reset();
                },
                (error) => {
                    console.log("ERR: ", error.text);
                }
            )
        } catch (error) {
            console.log("ERR: ", error);
        }
    }

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <div className="flex flex-col py-12 px-6 max-w-5xl mx-auto ">
                    <div className="flex items-center gap-2">
                        <FaRegHandshake className="text-3xl text-blue-500" />
                        <span className="text-3xl font-semibold">Let's Chat</span>
                    </div>
                    <p className="mt-5 max-w-lg text-gray-500">Questions, collaborations, or just saying hello, send a note and I'll reply when I can.</p>
                </div>

                <div className="max-w-5xl mx-auto px-6 sm:flex gap-2">
                    {emailSent && (
                        <Modal
                            open={() => {setEmailSent(true)}}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-3 px-6 rounded-lg w-100 h-50">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-xl mt-5">Sent</span>
                                        <FaRegThumbsUp className="text-blue-500 mt-5"/>
                                    </div>
                                    <span className="mt-3 text-sm text-gray-500">Email successfully sent!</span>
                                </div>
                                <div className="mt-2 flex justify-end mt-auto">
                                    <button 
                                    className="py-2 px-3 bg-blue-500 rounded text-white shadow-lg shadow-md shadow-blue-500 hover:cursor-pointer hover:bg-blue-500/95 mt-10"
                                    onClick={() => {setEmailSent(false)}}>
                                        Okay
                                    </button>
                                </div>

                            </div>
                        </Modal>
                    )}
                    <div className="">
                        <div className="py-5 px-5 rounded-lg shadow-sm bg-white sm:w-110">
                            <span className="text-gray-500 text-sm">Elsewhere</span>
                            <div className="flex gap-4">
                                <div className="flex gap-1 items-center hover:cursor-pointer py-2 px-3 bg-gray-100 rounded-lg text-sm mt-4 hover:bg-gray-200/70">
                                   <a href="https://linkedin.com/in/ariqchowdhury123" >Linkedin</a>
                                   <TbBrandLinkedin className="text-blue-500"/> 
                                </div>
                                
                                <div className="flex gap-1 items-center hover:cursor-pointer py-2 px-3 bg-gray-100 rounded-lg text-sm mt-4 hover:bg-gray-200/70">
                                    <a href="#"> Email</a>
                                    <TfiEmail className="text-blue-500"/>
                                </div>
                                <div className="flex gap-1 items-center hover:cursor-pointer py-2 px-3 bg-gray-100 rounded-lg text-sm mt-4 hover:bg-gray-200/70">
                                    <a href="https://github.com/ariqgchowdhury"> Github</a>
                                    <RiGithubFill className="text-blue-500"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 py-6 px-6 bg-gray-100/20 shadow-lg rounded-lg sm:ml-10 sm:w-100">
                        <form onSubmit={handleSubmit(sendMessage)}>
                            <div className="flex flex-col text-sm mb-4">
                                <label className="mb-2 text-gray-800">Name</label>
                                <input {...register("name", {
                                    
                                    minLength:{
                                        value: 1,
                                        message: "Name is required"
                                    },
                                    required: "Name is required",
                                    validate: (value) => {
                                        return value.trim().length > 0 || "Name is required"
                                    }
                                })} 
                                id="name" 
                                type="text"
                                placeholder="Your name" 
                                className="bg-white shadow-sm py-1 rounded px-1">
                                </input>
                                {errors.name && (
                                    <p className="text-red-500 text-xs font-semibold mt-2">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col text-sm mb-4">
                                <label className="mb-2 text-gray-800">Email</label>
                                <input {...register("email", {
                                    pattern: {
                                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                        message: "Invalid email format"
                                    },
                                    required: true
                                })} 
                                id="email"
                                type="email" 
                                placeholder="you@example.com" 
                                className="bg-white shadow-sm py-1 rounded px-1">
                                </input>
                                {errors.email && (
                                    <p className="text-red-500 text-xs font-semibold mt-2">
                                        {errors.email.message}
                                    </p>
                                )}
                                
                            </div>
                                
                            <div className="flex flex-col text-sm">
                                <label className="mb-2 text-gray-800">Message</label>
                                <textarea {...register("message", {
                                    minLength:{
                                        value: 6,
                                        message: "Message above 5 characters is required"
                                    },
                                    required: "Message above 5 characters is required",
                                    validate: (value) => {
                                        return value.trim().length > 5 || "Message above 5 characters is required"
                                    }
                                })} 
                                rows={5}
                                id="message" 
                                type="text"
                                placeholder="Write your message..." 
                                className="bg-white shadow-sm py-1 rounded px-1">
                                </textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-xs font-semibold mt-2">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="hover:cursor-pointer py-2 px-2 bg-blue-500 shadow-lg shadow-blue-500/50 text-white rounded mt-4 text-sm disabled:cursor-not-allowed" disabled={!isValidEmail || !isValidName}>Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )

}

export default Contact;