import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "../api/apiUrl";

function LoginForm(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
  
    const navigate = useNavigate();

    /*
    useEffect(() =>{
        if(sessionStorage.getItem("sessionID")){
            navigate("/books");
        }
        else{
            return;
        }
    }, [navigate])
    */

    const auth = async(e) =>{
        //e.preventDefault();
        
        if(user === "" || password === "") return;

        const credentials = btoa(`${user}:${password}`);
        
        const response = await fetch(`${apiUrl}/authenticate/login`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Basic ${credentials}`,

            },
        });


        if(response.status === 400){
            localStorage.setItem("isAuthenticated", false);
            return setErrorMsg("Wrong username or password.");
        }
        else{
            const res = await response.json();
            sessionStorage.setItem("sessionID", res.data.token);
            localStorage.setItem("isAuthenticated", true);
            navigate("/dashboard");
        }

    }
    

    return(
        <div className="flex flex-col items-center border-solid border-3 border-[#a89984] shadow-2xl/150 w-150 bg-[#665c54] p-4 rounded-3xl ">
            <h3 className="text-center text-2xl text-[#ebdbb2]">Login</h3>
            <form className="w-85 text-[#ebdbb2] p-1" action={auth}>
                <label className="text-lg font-bold mt-2" htmlFor="email">User:</label><br/>
                <input 
                    className={`peer bg-white text-md text-black rounded-xl p-2 border-solid border-3 border-[#a89984]
                    focus:border-sky-500 focus:outline`}
                    type="text" 
                    name="email" 
                    placeholder="Email or Account Name"
                    size={30}
                    onChange={e => {setUser(e.target.value)}}
                />
                <p className="invisible peer-invalid">Please provide a valid email address.</p>
                <br/>
                <label className="text-lg font-bold mt-2" htmlFor="password">Password:</label><br/>
                <input 
                    className={`bg-white text-md text-black rounded-xl p-2 border-solid border-3 border-[#a89984]
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
                />
            </form>
            <Link to="/signup" className="mt-2 text-white underline underline-offset-2 hover:text-blue-400"><p>Don't have an account? Sign up.</p></Link>
        </div>
    )
}

export default LoginForm;
