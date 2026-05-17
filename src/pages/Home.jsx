import { useEffect, useState, useRef } from "react";
import { CgArrowDownO } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi2";
import profilePic from '../assets/profilepic.jpeg';

export function Home() {
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth >= 768);
    const navigate = useNavigate();
    const typeWriterClass = "text-xl sm:text-3xl tracking-[0.15em] font-bold font-mono border-r-4 "
    + "animate-cursor overflow-hidden whitespace-nowrap transition-[width] ease-in-out duration-2000 mr-auto";
    const [currentHat, setCurrentHat] = useState(0);
    const [collapseClass, setCollapseClass] = useState(" w-0");
    let hats = [
        {
            prep:'',
            suffix: "Ariq Chowdhury",
        },
        {
            prep:'',
            suffix: "a Backend Engineer",
        },
        {
            prep:'',
            suffix: "an AI Engineer",
        },

    ];

    useEffect(() => {
        const handleResize = () => {
            setIsNotMobile(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setTimeout(() => setCollapseClass(" w-full"), 100);
        const incrementHat = async () => {
            setCollapseClass(" w-0");
            setTimeout(() => {
                setCurrentHat(oldVal => {
                    let hatIndex;
                    if (oldVal >= hats.length - 1) {
                        hatIndex = 0;
                    } else {
                        hatIndex = oldVal + 1;
                    }

                    return hatIndex;
                });
            }, 2100);
           
            setTimeout(() => {
                setCollapseClass(" w-full");
            }, 2000);
        }
        
        const id = setInterval(incrementHat, 6000);
        return () => clearInterval(id);
    }, []); 

    const sectionRef = useRef(null);


    return (
        <>
        <div className="bg-gray-50 py-20">
            <div className="min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 blur-xl opacity-60">  
                    </div>
                        <img src={profilePic} alt="alt" 
                            className="relative rounded-full w-45">
                        </img>        
                    </div>
                    <div className="mt-5 flex flex-col items-center">
                        <span className="mb-4 tracking-[0.15em] text-sm text-gray-500">HELLO, I'M</span>
                        <div className={`${typeWriterClass}${collapseClass}`}>{hats[currentHat].suffix}</div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-yellow-500 blur-2xl opacity-15"></div>
                        <div className="flex flex-col items-center mt-5 text-gray-400">
                            {!isNotMobile ? (
                                <>
                                <span className="px-5 ml-6">Recent Computer Science graduate from Wayne State University with a focus on backend development and AI-powered software</span>
                                
                                </>) : (
                                <>
                                <span>Recent Computer Science graduate from Wayne State University with a focus on</span>
                                <span>backend development and AI-powered software</span>
                                </>
                            )}
                            <span className="mt-8 sm:mt-4 text-[0.6rem] tracking-wide">ABOUT ME</span>
                            <button className="hover:cursor-pointer text-blue-500 text-3xl animate-bounce  mt-4 sm:mt-2" onClick={() => {sectionRef.current.scrollIntoView({behavior: 'smooth'})}}><CgArrowDownO /></button>
                        </div>
                    </div>

                </div>
            </div>
            <section ref={sectionRef}>
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="py-7 px-6 rounded-lg bg-white shadow-lg w-95 h-130 sm:w-200 sm:h-125 sm:px-9">
                        <h3 className="font-semibold text-xl sm:text-2xl mb-1 sm:mb-4 flex items-center gap-2">Hey, I'm Ariq. <HiAcademicCap className="text-blue-500"/></h3>
                        <p className="text-sm sm:text-md mb-3 sm:mb-5 text-gray-700 sm:leading-7">
                            I'm a Computer Science graduate from Wayne State University with a strong 
                            interest in backend development, AI-powered applications, and building 
                            scalable software systems. 
                        </p>
                        <p className="text-sm sm:text-md mb-3 sm:mb-5 text-gray-700 sm:leading-7">
                            Currently, I'm working as a Software Engineer Intern at United 
                            Wholesale Mortgage for Summer 2026.
                        </p>
                        
                        <p className="text-sm sm:text-md text-gray-700 sm:leading-7">
                            Some of my projects include 
                            SpeechMatch, where I served as backend lead for an AI-powered pronunciation evaluation
                            platform built with React Native, FastAPI, PostgreSQL, and Azure Speech Services,
                            AI Interviewer, an interview preparation platform that evaluates technical responses using AI and
                            semantic similarity models,
                            ResellIQ, a machine learning application trained on historical laptop sales data to generate
                            resale predictions, and 
                            Travel Agent AI, an AI-driven travel planning assistant.
                        </p>
                        <div className="flex justify-end mt-4 sm:mt-8">
                            <button
                            onClick={() =>{navigate('/projects')}} 
                            className=" sm:animate-bounce bg-blue-500 hover:opacity-90 text-sm text-white rounded-lg px-3 py-3 hover:cursor-pointer flex items-center gap-2 shadow-md">See Projects <FaArrowRight />
                            
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
        </> 
    )
}

export default Home;