import { FaSquareTwitter } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { FaFeatherPointed } from "react-icons/fa6";

const NavItem = ({icon, text}) =>(
    <div className="flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-200">
        <span className="text-2xl mr-4">{icon}</span>
        <span className="text-xl hidden xl:inline">{text}</span>
    </div>
)

export function Sidebar(){
    return(
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
            <FaSquareTwitter className="text-blue-400 text-5xl my-4"/>
            <nav>
                <NavItem icon={<FaHouse/>} text="Home"/>
                <NavItem icon={<FaHashtag />} text="Explore"/>
                <NavItem icon={<FaBell />} text="Notifications"/>
                <NavItem icon={<FaEnvelope />} text="Messages"/>
                <NavItem icon={<FaBookmark />} text="Bookmarks"/>
                <NavItem icon={<FaUserGroup />} text="Communities"/>
                <NavItem icon={<FaSquareTwitter/>} text="Premium"/>
                <NavItem icon={<FaUser/>} text="Profile"/>
                <NavItem icon={<FaEllipsis />} text="More"/>
            </nav>     
            <button className="bg-blue-400 text-white rounded-full font-bold py-3 mt-4 w-full hover:bg-blue-300 transition duration-200">
             <FaFeatherPointed className="text-3xl m-1 inline xl:hidden"/>
             <span className="hidden xl:inline">Twitter</span>
            </button>       
        </div>
    )
}