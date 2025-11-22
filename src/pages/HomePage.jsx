import { useState } from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContet";

function HomePage(){

    return(
        <div className="font-display overscroll-none p-1 relative w-screen min-h-screen bg-[#32302f]">
            <Navbar />
            <HomeContent />
            <Footer/>
        </div>
    )
}

export default HomePage;
