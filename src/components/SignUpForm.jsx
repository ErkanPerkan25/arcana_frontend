import React, { useState } from "react";

function SignUpForm(){
    const [email, setEmail] = useState("");
    const [newUser, setNewUser] = useState("");
    const [newPassword, setNewPassword] = useState("");

    return(
        <div className="flex flex-col items-center border-solid border-3 border-[#a89984] shadow-2xl w-150 bg-[#7c6f64] p-4 rounded-3xl ">
            <h3 className="text-center text-2xl text-[#ebdbb2]">Create an Account</h3>
            <form className="w-85 text-[#ebdbb2] p-1">
                <label htmlFor="email">Email:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="text" 
                    id="email" 
                    name="email" 
                    size={30}
                    placeholder="Email"
                />
                <br/>

                <label htmlFor="username">Username:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="text" 
                    id="email" 
                    name="email" 
                    size={30}
                    placeholder="Email"
                />
                <br/>

                <label htmlFor="password">Password:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="password" 
                    id="password" 
                    name="password" 
                    size={30}
                    placeholder="Password"
                />
                <br/>
                <label htmlFor="re-password">Re-password:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="password" 
                    id="re-password" 
                    name="re-password" 
                    size={30}
                    placeholder="Password"
                />
                <br/>
                <input 
                    className="block w-20 text-lg bg-[#89b482] rounded-md p-2 mt-6 mr-auto ml-auto"
                    type="submit" 
                    value="Submit" 
                />
            </form>
        </div>
    )
}

export default SignUpForm;
