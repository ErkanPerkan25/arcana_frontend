import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountInfo from "../components/AccountInfo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DashboardPage(){

    const navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem("sessionID");

    useEffect(() =>{
        if(!isAuthenticated){
            navigate('/login', {replace: true});
        }
    }, [navigate, isAuthenticated])

    return(
        <div className="font-display p-1 relative w-screen min-h-screen bg-[#32302f]">
            <Navbar />
            <AccountInfo />
            <Footer />
        </div>
    )
}
export default DashboardPage;
