import { useState } from "react";
import HomeCard from "./HomeCard";
import data from "../data/HomeCards"

function HomeContent(){
    return(
        <div>
            <div className="m-5">
                <h1 className="font-bold text-4xl text-[#d3869b] text-center">Welcome!</h1>
                <p className="font-bold text-xl mt-3 text-[#d3869b] text-center" >The colletion of you notes for your favorite books</p> 
            </div>


            <div className="flex flex-col lg:flex-row justify-center p-5">
            {data.map((item,index)=>(
                <HomeCard
                    key={index}
                    title={item.title} 
                    url={item.url}
                    link_url={item.link_url}
                />
            ))}
            </div>
        </div>
    )
}

export default HomeContent;
