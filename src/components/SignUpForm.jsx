import React, { useState } from "react";
import { apiUrl } from "../api/apiUrl";
import { useNavigate } from "react-router-dom";

function SignUpForm(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const navigate = useNavigate();


    if(passwordCheck === newPassword){
        console.log("Password are the same!")
    }
    else{
        console.log("Password are not the same!")
    }

    const createUser = async(e) =>{
        if(username === "" || newPassword === "") return;

        const res = await fetch(`${apiUrl}/signUp/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: newPassword
            })
        });

        if(res.status === 400){
            return;
        }
    }

    return(
        <div className="flex flex-col items-center border-solid border-3 border-[#a89984] shadow-2xl w-150 bg-[#7c6f64] p-4 rounded-3xl ">
            <h3 className="text-center text-2xl text-[#ebdbb2]">Create an Account</h3>
            <form className="w-85 text-[#ebdbb2] p-1" action={createUser}>
                <label htmlFor="email">Email:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="text" 
                    id="email" 
                    name="email" 
                    size={30}
                    onChange={e => (setEmail(e.target.value))}
                    placeholder="Email"
                    required
                />
                <br/>

                <label htmlFor="username">Username:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="text" 
                    id="username" 
                    name="username" 
                    size={30}
                    onChange={e => (setUsername(e.target.value))}
                    placeholder="Username"
                    required
                />
                <br/>

                <label htmlFor="password">Password:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="password" 
                    id="password" 
                    name="password" 
                    onChange={e => (setNewPassword(e.target.value))}
                    size={30}
                    placeholder="Password"
                    required
                />
                <br/>
                <label htmlFor="re-password">Re-password:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="password" 
                    id="re-password" 
                    name="re-password" 
                    onChange={e => (setPasswordCheck(e.target.value))}
                    size={30}
                    placeholder="Password"
                    required
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
