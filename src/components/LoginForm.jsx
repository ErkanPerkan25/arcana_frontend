import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="flex flex-col items-center border-solid border-3 border-[#a89984] shadow-2xl w-150 bg-[#7c6f64] p-4 rounded-3xl ">
            <h3 className="text-center text-2xl text-[#ebdbb2]">Login</h3>
            <form className="w-85 text-[#ebdbb2] p-1">
                <label className="text-lg font-bold" for="email">User:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email or Account Name"
                    size={30}
                    onChange={e => {setUser(e.target.value)}}
                />
                <br/>
                <label className="text-lg font-bold" for="password">Password:</label><br/>
                <input 
                    className="bg-white text-md text-black rounded-sm p-1"
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password"
                    size={30}
                    onChange={e => {setPassword(e.target.value)}}
                />
                <br/>
                <input 
                    className="block w-20 text-lg bg-[#89b482] rounded-md p-2 mt-6 mr-auto ml-auto"
                    type="submit" 
                    value="Login" 
                />
            </form>
            <Link to="/signup"><a>Don't have an account?</a></Link>
        </div>
    )
}

export default LoginForm;
