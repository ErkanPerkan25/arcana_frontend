import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage(){
    return(
        <div className="p-1 relative w-screen min-h-screen bg-[#32302f]">
            <div className="absolute top-50 right-0 left-0 flex flex-col items-center">
                <h1 className="mb-20 text-4xl font-bold text-[#d3869b]">Welcome to Arcana</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;
