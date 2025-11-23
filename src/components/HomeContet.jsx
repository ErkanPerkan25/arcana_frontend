import { useState } from "react";
import HomeCard from "./HomeCard";

function HomeContent(){
    return(
        <div>
            <div className="m-5">
                <h1 className="font-bold text-4xl text-[#d3869b] text-center">Welcome!</h1>
            </div>

            <div className="flex flex-row justify-center p-5">
            {/*HomeCard.map((item,key )=>(
                <HomeCard
                    title={item.title} 
                    url={item.url}
                    type={item.type}
                    key={key}
                />
            ))*/}
            </div>
        </div>
    )
}

export default HomeContent;
