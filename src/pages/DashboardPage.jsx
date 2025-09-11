import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountInfo from "../components/AccountInfo";

function DashboardPage(){

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    useEffect(() =>{
        if(!isAuthenticated){
            navigate('/login', {replace: true});
        }
    }, [navigate, isAuthenticated])

    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <h1>Welcome to the dashboard!</h1>
            <AccountInfo />
        </div>
    )
}
export default DashboardPage;
