import { useState } from "react";

function UserInfo({username, email}){
    //const [username, setUsername] = useState("");
    //const [email, setEmail] = useState("");

    return(

        <div className={`w-full m-3`}>
            <h1 className={`font-bold text-2xl text-[#fb4934]`}>Account</h1>
            <h3 className={`font-bold text-xl text-[#b8bb26]`}>Userame</h3>
            <p>{username}</p>
            <button 
                className="block w-20 text-md bg-[#89b482] rounded-md p-1 mt-2"
                type="button"
            >
            Change
            </button>
            <h3 className={`font-bold text-xl text-[#b8bb26]`}>Email</h3>
            <p>{email}</p>

            <button 
                className="block w-20 text-md bg-[#89b482] rounded-md p-1 mt-2"
                type="button"
            >
            Change
            </button>

        </div>
    )
}

export default UserInfo;
