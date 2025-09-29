import { useState } from "react";

function ChangePasswordComp(){
    return(
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
    )
}

export default ChangePasswordComp;
