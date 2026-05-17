import { useNavigate } from "react-router-dom";
import { RiHomeSmileLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { useState } from "react";

export function Nav() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const experienceRoute = "/experience";
    const projectsRoute = '/projects';
    const contactRoute = '/contact';

    return (
    <>
        <header className="sticky top-0 z-50 bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
            <div className="flex hover:cursor-pointer 2xl:-ml-30" onClick={() => navigate('/')}>
                <button className="text-xl hover:cursor-pointer hover:bg-slate-200/55 rounded-lg px-1 py-1"><RiHomeSmileLine /></button>
                <a className="hidden md:block font-semibold py-1 ">Ariq Chowdhury</a>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch py-2">
                <span className="md:hidden font-semibold py-1">Ariq Chowdhury</span>
                <div>
                    <div className="hidden md:flex space-x-4 xl:mr-20">
                        <a href={experienceRoute} className="px-2 py-1 text-sm rounded-lg text-gray-400 hover:bg-slate-100/55 hover:text-black">Experience</a>
                        <a href={projectsRoute} className="px-2 py-1 text-sm rounded-lg text-gray-400 hover:bg-slate-100/55 hover:text-black">Projects</a>
                        <a href={contactRoute} className="px-2 py-1 text-sm rounded-lg text-gray-400 hover:bg-slate-100/55 hover:text-black">Contact</a>
                    </div>
                    
                    
                </div>
                
                
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl ">
                    {isOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>
        </nav>
        {isOpen && (
            <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
                <a href={experienceRoute} className="text-gray-400 focus:text-black w-50">Experience</a>
                <a href={projectsRoute} className="text-gray-400 focus:text-black w-50">Projects</a>
                <a href={contactRoute} className="text-gray-400 focus:text-black w-50">Contact</a>
            </div>
        )}
        <hr className="border-gray-300"></hr>
        </header>
        
        
    </>
    )
    
}

export default Nav;