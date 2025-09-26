import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 


function HomePage(){


    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <Navbar />
            <h1>You are logged in!</h1>
        </div>
    )
}

export default HomePage;
