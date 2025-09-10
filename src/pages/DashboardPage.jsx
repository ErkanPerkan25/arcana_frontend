import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage(){

    const navigate = useNavigate();

    if(!localStorage.getItem("isLoggedIn")){
        navigate("/login");
    }

    return(
        <div>

        </div>
    )
}
export default DashboardPage;
