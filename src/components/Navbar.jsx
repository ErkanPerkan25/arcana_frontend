import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-100 mr-auto ml-auto">
            <ul className="flex flex-row list-none gap-20 text-[#ebdbb2] text-xl font-bold">
                <li><Link to="#">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/dashboard">Settings</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
