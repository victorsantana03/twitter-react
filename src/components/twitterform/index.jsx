import { FaImage } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { useRef } from "react";

export function TwitterForm({onTweet}){
    const textAreaRef = useRef()

    function handleSubmit(){
        if(textAreaRef.current.value){
            onTweet(textAreaRef.current.value)
            textAreaRef.current.value = ""
        }
    }

    return(
        <div className="border-b border-gray-800 p-4">
            <textarea className="w-full bg-transparent text-white text-xl resize-none outline-none
            " placeholder="What's happening?"
            ref={textAreaRef}/>
            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4 text-blue-400">
                 <FaImage className="cursor-pointer" />
                 <FaFilm className="cursor-pointer"/>
                 <FaChartBar className="cursor-pointer"/>
                 <FaFaceSmile className="cursor-pointer"/>
                 <FaCalendar className="cursor-pointer"/>
                 <FaMap className="cursor-pointer"/>
                </div>
                <button className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200" onClick={handleSubmit}>Tweet</button>
            </div>
        </div>
    )
}