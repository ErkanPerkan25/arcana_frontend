import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage(){

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    useEffect(() =>{
        if(!isAuthenticated){
            navigate('/login', {replace: true});
        }
    }, [navigate, isAuthenticated])

    return(
        <div>
            <h1>Welcome to the dashboard!</h1>
        </div>
    )
}
export default DashboardPage;
