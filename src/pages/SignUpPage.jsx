import React from "react";
import SignUpForm from "../components/SignUpForm";

function SignUpPage(){
    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <div className="absolute top-50 right-0 left-0 flex flex-col items-center">
                <h1 className="mb-20 text-4xl font-bold text-[#d3869b]">Sign Up to Arcana</h1>
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUpPage;
