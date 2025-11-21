import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-120 mr-auto ml-auto p-8">
            <ul className="flex flex-row justify-center ring-2 p-3 rounded-full ml-auto mr-auto list-none gap-15 text-[#ebdbb2] shadow-xl/30 uppercase text-xl font-bold">
                <li 
                    className="relative after:w-[0%] after:bottom-0 after:left-[50%] 
                        after:absolute after:bg-[#8ec07c] after:h-[2px]
                        after:transition-all after:duration-300 after:ease-in-out 
                        hover:after:w-[100%] hover:after:left-0"
                > 
                    <Link to="/">Home</Link>
                </li>
                <li className="relative after:w-[0%] after:bottom-0 after:left-[50%] 
                        after:absolute after:bg-[#8ec07c] after:h-[2px]
                        after:transition-all after:duration-300 after:ease-in-out 
                        hover:after:w-[100%] hover:after:left-0"
                    >
                    <Link to="/books">Books</Link>
                </li>
                <li className="relative after:w-[0%] after:bottom-0 after:left-[50%] 
                        after:absolute after:bg-[#8ec07c] after:h-[2px]
                        after:transition-all after:duration-300 after:ease-in-out 
                        hover:after:w-[100%] hover:after:left-0"
                    >
                    <Link to="/dashboard">Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
