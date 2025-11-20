import { useState } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

function HomePage(){

    return(
        <div className="font-display p-1 relative w-screen min-h-screen bg-[#32302f]">
            <Navbar />
            <div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;
