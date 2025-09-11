import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";

function AccountInfo(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const accountData = async (e) =>{
        
        const res = fetch(`${apiUrl}/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    useEffect(()=>{

    }, [])
    return(
        <div className={`text-[#ebdbb2] border-solid border-3 border-[#a89984] shadow-2xl/150 bg-[#665c54] p-4 rounded-3xl`}>
            <h1 className={`font-bold text-2xl text-[#fb4934]`}>Account</h1>
            <div className={``}>
                <h3 className={`font-bold text-xl text-[#b8bb26]`}>Email</h3>
                <p>{email}</p>
                <h3 className={`font-bold text-xl text-[#b8bb26]`}>Userame</h3>
                <p>{username}</p>
                <h3 className={`font-bold text-xl text-[#b8bb26]`}>Phone Number</h3>
                <p>xxx-xxx-xxxx</p>
            </div>
        </div>
    )
}

export default AccountInfo;
