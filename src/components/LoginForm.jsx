import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../api/apiUrl";
import { useAuth } from "./auth/useAuth";
import { MdAccountCircle } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function LoginForm(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
  
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() =>{
        if(auth.isAuthenticated){
            navigate("/books")
        }
    }, [auth,navigate]);

    const authenticate = async (e) =>{
        //e.preventDefault();
        
        if(user === "" || password === "") return;

        const credentials = btoa(`${user}:${password}`);
        
        const response = await fetch(`${apiUrl}/authenticate/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${credentials}`,
            },
            credentials: "include"
        });
        
        if(response.ok){
            const res = await response.json();
            sessionStorage.setItem("sessionID", res.data.token);
            //localStorage.setItem("isAuthenticated", true);
            auth.login(res.data.token, res.data.userId);
        }
        else{
            localStorage.setItem("isAuthenticated", false);
            return setErrorMsg("Wrong username or password.");
        }
    }
    

    return(
        <div className="w-70 sm:w-100 md:w-120 lg:w-150 flex flex-col items-center border-solid border-3 border-[#a89984] shadow-2xl/150  bg-[#665c54] p-4 rounded-3xl ">
            <h3 className="text-center text-2xl text-[#ebdbb2]">Login</h3>
            <form className="w-60 md:w-80 lg:w-90 text-[#ebdbb2] p-1" action={authenticate}>
                <label className="text-lg font-bold mt-2" htmlFor="email"><MdAccountCircle className="inline text-2xl"/> User:</label><br/>
                <input 
                    className={`w-full peer bg-white text-md text-black rounded-xl p-2 border-solid border-3 border-[#a89984]
                    focus:border-sky-499 focus:outline`}
                    type="text" 
                    name="email" 
                    placeholder="Email or Account Name"
                    size={30}
                    onChange={e => {setUser(e.target.value)}}
                />
                <p className="invisible peer-invalid">Please provide a valid email address.</p>
                <label className="text-lg font-bold mt-2" htmlFor="password"><RiLockPasswordFill className="inline text-2xl"/> Password:</label><br/>
                <input 
                    className={`w-full bg-white text-md text-black rounded-xl p-2 border-solid border-3 border-[#a89984]
                     focus:border-sky-500 focus:outline`}
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    size={30}
                    onChange={e => {setPassword(e.target.value)}}
                />
                <p className="text-red-400 text-center mt-4">{errorMsg}</p>
                <input 
                    className="block w-20 text-lg bg-[#89b482] rounded-md p-2 mt-4 mr-auto ml-auto"
                    type="submit" 
                    value="Login" 
                    disabled={!user || !password}
                />
            </form>
            <Link to="/signup" className="mt-2 text-white underline underline-offset-2 hover:text-blue-400"><p>Don't have an account? Sign up.</p></Link>
        </div>
    )
}

export default LoginForm;
