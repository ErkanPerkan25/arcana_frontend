import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-120 mr-auto ml-auto p-8">
            <ul className="flex flex-row justify-center ring-2 p-3 rounded-full ml-auto mr-auto list-none gap-20 text-[#ebdbb2] shadow-xl/30 text-xl font-bold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/dashboard">Settings</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
