import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";

function AccountInfo(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const accountData = async (e) =>{
        
        const respone = await fetch(`${apiUrl}/dashboard/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("sessionID")}`,
            }
        });

        if(!respone){
            console.log(respone.status);
        }
        else{
            const res = await respone.json();
            setUsername(res.username);
            setEmail(res.email);
        }
    }

    useEffect(()=>{
        accountData();
    }, [])

    return(
        <div className={`w-300 mr-auto ml-auto text-[#ebdbb2] border-solid border-3 border-[#a89984] shadow-2xl/150 bg-[#665c54] p-4 rounded-3xl`}>
            <h1 className="text-center text-[#ebdbb2] font-bold text-2xl">Dasboard</h1>
            <div>
                <div className={`m-3`}>
                    <h1 className={`font-bold text-2xl text-[#fb4934]`}>Account</h1>
                    <h3 className={`font-bold text-xl text-[#b8bb26]`}>Email</h3>
                    <p>{email}</p>
                    <h3 className={`font-bold text-xl text-[#b8bb26]`}>Userame</h3>
                    <p>{username}</p>
                </div>
                <hr/>
                <div className={`m-3`}>
                    <h1 className={`font-bold text-2xl text-[#fb4934]`}>Password</h1>

                    <label>Change Password</label>
                    <form className={``}>
                        <input 
                            className={`bg-white text-md text-black rounded-xl p-2 mb-1 mt-1 border-solid border-3 border-[#a89984]
                            focus:border-sky-500 focus:outline`}
                            type="password" 
                            placeholder="Enter in Old Password"
                            size={30}
                        />
                        <br/>
                        <input 
                            className={`bg-white text-md text-black rounded-xl p-2 mt-1 border-solid border-3 border-[#a89984]
                            focus:border-sky-500 focus:outline`}
                            type="password" 
                            placeholder="Enter in New Password"
                            size={30}
                        />
                        <input 
                            className="block w-20 text-md bg-[#89b482] rounded-md p-1 mt-2"
                            type="submit" 
                            value="Change" 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;
