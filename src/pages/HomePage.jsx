import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 


function HomePage(){


    return(
        <div className="p-1 relative w-screen h-full bg-[#32302f]">
            <Navbar />
            <h1>You are logged in!</h1>
        </div>
    )
}

export default HomePage;
