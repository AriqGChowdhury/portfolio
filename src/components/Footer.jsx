import { RiCopyrightLine, RiLinkedinLine, RiGithubFill, RiPhoneLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

export function Footer() {

    return (
        <>
        <hr className="border-gray-300"></hr>
        <footer className="flex justify-between px-3 py-7">
            
            <div className="ml-4 sm:ml-15 flex items-center text-black font-thin ">
                <RiCopyrightLine className="text-gray-400"/>
                <span className="px-1 text-xs"> 2026 Ariq Chowdhury</span>
            </div>
           
            <div className="flex items-center space-x-4 hover:cursor-pointer text-lg sm:mr-20">
                <a href="https://linkedin.com/in/ariqchowdhury123"><RiLinkedinLine /></a>
                <a href="mailto:ariq922@hotmail.com"><TfiEmail /></a>
                <a href="https://github.com/AriqGChowdhury"><RiGithubFill /></a>
                <a className="mr-5" href="/contact"><RiPhoneLine /></a>
            </div>
            
        </footer>
        </>
    )

}

export default Footer;