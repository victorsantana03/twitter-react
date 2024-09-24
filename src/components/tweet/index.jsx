import { useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import { FaComment } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";

export function Tweet({ tweet }) {
const [comments, setComments] = useState(0)
const [like, setLikes] = useState(0)
const [retweet, setRetweets] = useState(0)

    function handleAction(action){
        switch (action) {
            case 'like':
                setLikes( (likes) => likes + 1 )
                break;
            case 'retweet':
                setRetweets( (retweets) => retweets + 1)
                break;
        
            default:
                setComments( (comments) => comments + 1)
                break;
        }
    }
    return (
        <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition duration-200">
            <div className="flex space-x-3">
                <img src={tweet.avatar} className="rounded-full w-12 h-12"/>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-bold">{tweet.name}</span>
                            <span className="text-gray-500 ml-2">@{tweet.username}</span>
                            <span className="text-gray-500 ml-2">{tweet.time}</span>
                        </div>
                        <FaEllipsis className="text-gray-500"/>
                    </div>
                    <p className="mt-2">{tweet.content}</p>
                    {tweet.image && <img src={tweet.image} className="mt-3 rounded-2xl max-w-full h-auto"/>}
                    <div className="flex justify-between mt-4 text-gray-500">
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                            <FaComment onClick={() => handleAction('comments')}/>
                            <span className="ml-2">{comments}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-green-400">
                            <FaRetweet onClick={() => handleAction('retweet')}/>
                            <span className="ml-2">{retweet}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-red-400">
                            <FaHeart onClick={() => handleAction('like')}/>
                            <span className="ml-2">{like}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                            <FaChartBar/>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                         <FaUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}