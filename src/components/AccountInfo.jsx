import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";
import UserInfo from "./UserInfo";
import ChangePasswordComp from "./ChangePasswordComp";
import { useAuth } from "./auth/useAuth";

function AccountInfo(){
    const [data, setData] = useState([]);
    
    const auth = useAuth();
   
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
            setData(res);
        }
    }
    
    const handleLogout = async() =>{
        auth.logout();
        window.location.reload();
    }

    useEffect(()=>{
        accountData();
    }, [])

    return(
        <div className={`w-300 mr-auto ml-auto text-[#ebdbb2] border-solid border-3 border-[#a89984] shadow-2xl/150 bg-[#665c54] p-4 rounded-3xl`}>
            <h1 className="text-center text-[#ebdbb2] font-bold text-2xl">Dasboard</h1>
            <div>
                <UserInfo
                    username={data.username}
                    email={data.email}
                />
                <hr/>
                <ChangePasswordComp />
                <hr/>
                <div className={`m-3`}>
                    <h1 className={`font-bold text-2xl text-[#fb4934]`}>Sign Out</h1>
                    <button 
                        className="block w-20 text-md bg-[#89b482] font-bold rounded-md p-1 mt-2 hover:cursor-pointer"
                        type="button"
                        onClick={handleLogout}
                    >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;
