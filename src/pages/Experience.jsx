import { GoDotFill } from "react-icons/go";
import uwm from '../assets/uwm.png';
import pma from '../assets/pma.png';

export function Experience() {

    return (
        <>
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="py-10">
                        <h2 className="text-2xl font-semibold mb-2 tracking-wide">Experience</h2>
                        <p className="text-gray-500">Roles that shaped how I build software</p>
                    </div>

                    <div className="bg-white w-full max-w-3xl sm:h-80 rounded-md py-5 px-4 shadow-sm">
                        <div className="flex gap-2">
                            <img src={uwm} alt="" className="w-8 sm:w-10"></img>
                            <span className="font-medium">United Wholesale Mortgage</span>
                        </div>
                        <div className="flex gap-2 sm:gap-4 max-[391px]:text-[0.68rem] text-sm text-gray-400 ml-10 sm:ml-12 -translate-y-2 sm:-translate-y-4 ">
                            <p>Pontiac, MI, United States</p>
                            <p>In-Office</p>
                            <p>3 mo</p>
                            
                        </div>
                        <div className="flex mt-4 sm:mt-2 px-1">
                            <span className="max-[391px]:hidden w-35 text-[0.65rem] sm:text-xs py-1 -translate-y-4">May 2026 - Aug 2026</span>
                            <div className="ml-5 w-120 -translate-y-4">
                                <span className="mr-2 sm:mr-0 sm:w-50 text-center font-medium text-sm sm:text-lg">
                                    Software Engineer Intern
                                </span>
                                <p className="mt-2 sm:mt-4 text-[0.65rem] sm:text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <GoDotFill className="text-xs"/>
                                        <span>Selected For 2026 Summer Internship</span>
                                    </div>
                                </p>
                                
                                <div className="flex mt-5 gap-4 ">
                                    <span className="bg-yellow-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-yellow-600">REST APIs</span>
                                    <span className="bg-blue-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-blue-600">C#</span>
                                    <span className="bg-yellow-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-yellow-600">SQL</span>
                                </div>
                            </div>
                            <span className="ml-auto text-[0.65rem] sm:text-xs rounded-lg bg-gray-400/20 px-2 py-1 mb-auto -translate-y-4">
                                Internship
                            </span>
                        </div>
                    </div>

                    <div className="bg-white w-full max-w-3xl sm:h-80 rounded-md py-5 px-4 shadow-sm mt-8">
                        <div className="flex gap-2">
                            <img src={pma} alt="" className="w-9 translate-y-2"></img>
                            <span className="font-medium">Product Manager Accelerator</span>
                        </div>
                        <div className="flex gap-4 max-[391px]:text-[0.68rem] text-sm text-gray-400 ml-11">
                            <p>United States</p>
                            <p>Remote</p>
                            <p>3 mo</p>
                            
                        </div>
                        <div className="flex mt-4 sm:mt-2 px-1">
                            <span className="max-[391px]:hidden whitespace-nowrap sm:w-35 text-[0.65rem] sm:text-xs py-1">Jan 2025 - <br className="sm:hidden"></br> Apr 2025</span>
                            <div className="ml-2 sm:ml-5 w-100 sm:w-120">
                                <span className="ml-2 sm:ml-0 sm:w-50 text-center font-medium text-sm sm:text-lg">
                                    AI Backend Engineer Intern
                                </span>
                                <p className="mt-2 sm:mt-4 text-[0.65rem] sm:text-sm text-gray-400">
                                    <div className="flex gap-2">
                                        <GoDotFill className="text-xl sm:text-base"/>
                                        <span>Built ArtMatchAI, an AI web app that redesigns rooms using image inpainting based on user input.</span>
                                    </div>
                                </p>
                                <p className="mt-2 sm:mt-4 text-[0.65rem] sm:text-sm text-gray-400">
                                    <div className="flex gap-2">
                                        <GoDotFill className="text-4xl sm:text-2xl"/>
                                        <span>Integrated LLMs and computer vision models to interpret user instructions and update room visuals; won 2nd place in company-wide innovation competition.</span> 
                                    </div>
                                </p>
                                <div className="flex mt-5 gap-2 sm:gap-4">
                                    <span className="whitespace-nowrap bg-yellow-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-yellow-600">REST APIs</span>
                                    <span className="bg-blue-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-blue-600">PyTorch</span>
                                    <span className="bg-green-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-green-600">React</span>
                                    <span className="whitespace bg-blue-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-blue-600">Django</span>
                                    <span className="bg-yellow-200/30 py-1 px-2 text-[0.65rem] sm:text-xs rounded-lg text-yellow-600">SQL</span>
                                </div>
                            </div>
                            <span className="-translate-x-18 sm:translate-x-0 sm:ml-auto text-[0.65rem] sm:text-xs rounded-lg bg-gray-400/20 px-2 py-1 mb-auto">
                                Internship
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience;
