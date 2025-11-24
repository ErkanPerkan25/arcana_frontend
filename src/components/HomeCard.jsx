import {useState} from "react"
import { Link } from "react-router-dom";

function HomeCard({title, url, link_url}){
    return(
        <div className="relative text-center m-10 shadow-2xl border-solid border-3 border-[#ebdbb2] rounded-2xl transform transtion duration-200 ease-in-out hover:scale-108">
            <Link to={`${link_url}`}>
                <img
                    className="w-80 h-full object-cover rounded-xl"
                    src={url} 
                />
                <div className="w-full h-auto absolute rounded-xl bottom-0 bg-stone-800/75 text-white">
                    <h1 className="text-sm lg:text-2xl font-bold m-5">{title}</h1>
                </div>
            </Link>
        </div>
    )
}

export default HomeCard;
