import React from "react";
import LoginForm from "../components/LoginForm";
import { apiUrl } from "../api/apiUrl";

function LoginPage(){
    function callApi(){
        fetch(`${apiUrl}/users`)
            .then(res => res.text())
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    callApi();
    
    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <div className="absolute top-50 right-0 left-0 flex flex-col items-center">
                <h1 className="mb-20 text-4xl font-bold text-[#d3869b]">Welcome to Arcana</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;
