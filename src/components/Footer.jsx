import { useState } from "react";
import { Link } from "react-router-dom";

function Footer(){
    const [copyright, setCopyright] = useState("© 2025 www.your-site.com")

    const handleCopyright = () =>{
        const newCopyRight = document.getElementById("copyright");
        newCopyRight.innerHTML = "© 2025 - "+new Date().getFullYear()+" - All Rights Reserved";
        setCopyright(newCopyRight);
    }

    return(
        <div className="relative w-full h-60 fixed left-0 bottom-0 text-[#ebdbb2] p-4">
            <div className="w-full">
                <div className="w-30 p-2">
                    <h1 className="text-2xl font-bold text-[#fe8019]">Arcana</h1>
                    <ul className="flex flex-col justify-center mt-3 list-none gap-2">
                        <li>
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0" 

                                to="/books"
                            >
                                Books
                            </Link>
                        </li>
                        <li>
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0" 

                                to="/dashboard"
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="w-[90%] mr-auto ml-auto"/>
            <div id="copyright" className="w-full text-center ml-auto mr-auto mb-5 mt-4" onChange={handleCopyright}>
                {copyright}
            </div>
        </div>
    )
}

export default Footer;
