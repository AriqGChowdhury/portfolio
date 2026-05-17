import { LuStretchHorizontal } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function Projects() {
    const navigate = useNavigate();
    const [exp1, setExp1] = useState(false);
    const [exp2, setExp2] = useState(false);
    const [exp3, setExp3] = useState(false);
    const [exp4, setExp4] = useState(false);

    return (
        <>
            <div className="bg-gray-40 min-h-screen">
                <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col">
                    <span className="font-semibold text-2xl mt-10 tracking-wide">Projects</span>
                    <p className="text-gray-500 mt-3 text-sm">A selection of things I've built or contributed to</p>
                </div>

                <div className="max-w-5xl mx-auto px-6 mt-20 flex gap-10">
                    <div className="flex-1">
                        <div className="rounded-lg shadow-md py-3 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
                            <img src="../src/assets/ai_interviewer_landing.png" alt="alt" className="rounded h-57 w-full"></img>
                            <div className="px-3">
                                <h3 className="font-semibold mt-5 tracking-wide ">AI Interviewer</h3>
                                {exp1 ? (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        AI-powered interview platform that simulates technical interviews, evaluates  and recommends personalized LeetCode problems based on user performance. Features interview history tracking, and session-based task management.
                                        <button onClick={() => {setExp1(!exp1)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See Less</button>
                                    </div>
                                ) : (
                                    <div className="text-sm text-gray-500 mt-2 font-light inline">
                                        AI-powered interview platform that simulates technical interviews, evaluates  and recommends...
                                        <button onClick={() => {setExp1(!exp1)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See More</button>
                                    </div>
                                    )
                                }
                                <hr className="w-64 mt-2 text-gray-200"></hr>
                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <p>Tech Stack </p>
                                    <LuStretchHorizontal />
                                </div>
                                <div className="flex gap-3 text-[0.6rem] mt-2">
                                    <p className="px-1 py-1 bg-blue-100/90 rounded text-blue-500 shadow-md shadow-blue-200/90">Django</p>
                                    <p className="px-1 py-1 bg-yellow-100/90 rounded text-yellow-600 shadow-md shadow-yellow-200/90">Tailwind CSS</p>
                                    <p className="px-1 py-1 bg-green-100/90 rounded text-green-600 shadow-md shadow-green-200/90">React</p>
                                </div>

                                <div className="flex gap-3 mt-8 text-xs justify-end"> 
                                    <button className="flex gap-1 items-center px-4 py-2 bg-blue-500/90 text-white rounded-md hover:bg-blue-500/80 hover:cursor-pointer" onClick={() => {window.open('https://github.com/AriqGChowdhury/AI-Interviewer')}}>
                                        <FaGithub />
                                        <span>Code</span>
                                    </button>
                                    <button className="flex gap-1 items-center px-4 py-2 bg-blue-500/90 text-white rounded-md hover:bg-blue-500/80 hover:cursor-pointer" onClick={() => {window.open('https://ai-interviewer-seven-iota.vercel.app/')}}>
                                        <CiGlobe />
                                        <span>Demo</span>
                                    </button>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="rounded-lg shadow-md py-3 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
                            <img src="../src/assets/SpeechMatchLogo.png" alt="alt" className="rounded h-57 w-full object-contain"></img>
                            <div className="px-3">
                                <h3 className="font-semibold mt-5 tracking-wide ">SpeechMatch</h3>
                                {exp2 ? (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        AI-powered pronunciation assessment platform using Azure Speech Services to detect mispronounced, skipped, added, and timing deviation errors through phoneme-level comparison between reference and user audio in English and Spanish, enhanced with custom scoring refinement algorithms.
                                        <button onClick={() => {setExp2(!exp2)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See Less</button>
                                    </div>
                                ) : (
                
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        AI-powered pronunciation assessment platform using Azure Speech Services to detect mispronounced... 
                                        <button onClick={() => {setExp2(!exp2)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See More</button>
                                    </div>
                                )
                                }
                                <hr className="w-64 mt-2 text-gray-200"></hr>
                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <p>Tech Stack </p>
                                    <LuStretchHorizontal />
                                </div>
                                <div className="flex gap-3 text-[0.6rem] mt-2">
                                    <p className="px-1 py-1 bg-purple-100/90 rounded text-purple-500 shadow-md shadow-purple-200/90">FastAPI</p>
                                    <p className="px-1 py-1 bg-rose-100/90 rounded text-rose-600 shadow-md shadow-rose-200/90">PostgreSQL</p>
                                    <p className="px-1 py-1 bg-green-100/90 rounded text-green-600 shadow-md shadow-green-200/90">React Native</p>
                                </div>

                                <div className="flex gap-3 mt-8 text-xs justify-end"> 
                                    <button className="flex gap-1 items-center px-4 py-2 bg-blue-500/90 text-white rounded-md hover:bg-blue-500/80 hover:cursor-pointer" onClick={() => {window.open('https://drive.google.com/file/d/1s--zAEJfzLNA2zB8w-Lqh7wQcadgWpFx/view?usp=sharing')}}>
                                        <CiGlobe />
                                        <span>Demo</span>
                                    </button>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="rounded-lg shadow-md py-3 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300">
                            <img src="../src/assets/travelagent.png" alt="alt" className="rounded h-57 w-full object-contain"></img>
                            <div className="px-3">
                                <h3 className="font-semibold mt-5 tracking-wide ">Travel Agent AI</h3>
                                {exp3 ? (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        AI-powered travel assistant that helps users plan trips through a conversational interface with personalized itineraries, destination recommendations, scheduling, and budget-aware travel planning.
                                        <button onClick={() => {setExp3(!exp3)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See Less</button>
                                    </div>

                                ) : (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        AI-powered travel assistant that helps users plan trips through a conversational interface with...
                                        <button onClick={() => {setExp3(!exp3)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See More</button>
                                    </div>
                                )
                                }
                                <hr className="w-64 mt-2 text-gray-200"></hr>
                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <p>Tech Stack </p>
                                    <LuStretchHorizontal />
                                </div>
                                <div className="flex gap-3 text-[0.6rem] mt-2">
                                    <p className="px-1 py-1 bg-yellow-100/90 rounded text-yellow-500 shadow-md shadow-yellow-200/90">Flask</p>
                                    <p className="px-1 py-1 bg-blue-100/90 rounded text-blue-600 shadow-md shadow-blue-200/90">Bootstrap</p>
                                    <p className="px-1 py-1 bg-purple-100/90 rounded text-purple-600 shadow-md shadow-purple-200/90">LLaMa</p>
                                </div>

                                <div className="flex gap-3 mt-8 text-xs justify-end"> 
                                    <button className="flex gap-1 items-center px-4 py-2 bg-blue-500/90 text-white rounded-md hover:bg-blue-500/80 hover:cursor-pointer" onClick={() => {window.open('https://github.com/AriqGChowdhury/TravelAgentAI')}}>
                                        <FaGithub />
                                        <span>Code</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-6 mt-10 flex gap-10 mb-20">
                    <div className="flex-1">
                        <div className="rounded-lg shadow-md py-3 hover:shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300 w-74">
                            <img src="../src/assets/reselliq.png" alt="alt" className="rounded h-57 w-full object-contain"></img>
                            <div className="px-3">
                                <h3 className="font-semibold mt-5 tracking-wide ">ResellIQ</h3>
                                {exp4 ? (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        Machine learning resale analytics platform that predicts laptop resale and bid prices using historical marketplace sales data, helping users evaluate listings and pricing trends in real time.
                                        <button onClick={() => {setExp4(!exp4)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See Less</button>
                                    </div>
                                ) : (
                                    <div className="text-gray-500 text-sm mt-2 font-light inline">
                                        Machine learning resale analytics platform that predicts laptop resale and bid prices using...
                                        <button onClick={() => {setExp4(!exp4)}} className="text-xs text-blue-500 ml-1 hover:cursor-pointer">See More</button>
                                    </div>
                                )
                                }
                                
                                <hr className="w-64 mt-2 text-gray-200"></hr>
                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <p>Tech Stack </p>
                                    <LuStretchHorizontal />
                                </div>
                                <div className="flex gap-3 text-[0.6rem] mt-2">
                                    <p className="px-1 py-1 bg-red-100/90 rounded text-red-500 shadow-md shadow-red-200/90">Django</p>
                                    <p className="px-1 py-1 bg-blue-100/90 rounded text-blue-600 shadow-md shadow-blue-200/90">Machine Learning</p>
                                    <p className="px-1 py-1 bg-green-100/90 rounded text-green-600 shadow-md shadow-green-200/90">React</p>
                                </div>

                                <div className="flex gap-3 mt-8 text-xs justify-end"> 
                                    <button className="flex gap-1 items-center px-4 py-2 bg-blue-500/90 text-white rounded-md hover:bg-blue-500/80 hover:cursor-pointer" onClick={() => {window.open('https://github.com/AriqGChowdhury/Resell-IQ')}}>
                                        <FaGithub />
                                        <span>Code</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default Projects;