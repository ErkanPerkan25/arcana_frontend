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
        <div className="relative w-full h-65 sm:h-40 md:h-40 mt-20 fixed left-0 bottom-0 text-[#ebdbb2] p-4">
            <div className="w-full">
                <div className="w-[70%] ml-auto mr-auto flex flex-col md:flex-row md:gap-20 p-2">
                    <h1 className="mr-auto ml-auto md:ml-0 md:mr-0 text-4xl font-bold text-[#fe8019]">Arcana</h1>
                    <ul className="flex flex-col sm:flex-row justify-center mt-3 gap-2 md:gap-12 md:list-none ">
                        <li className="mr-auto ml-auto">
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mr-auto ml-auto">
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0" 

                                to="/books"
                            >
                                Books
                            </Link>
                        </li>
                        <li className="mr-auto ml-auto">
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0" 

                                to="/dashboard"
                            >
                                Settings
                            </Link>
                        </li>
                        <li className="mr-auto ml-auto">
                            <Link className="relative hover:cursor-pointer after:w-[0%] after:bottom-0 after:left-[50%] 
                                after:absolute after:bg-[#8ec07c] after:h-[2px]
                                after:transition-all after:duration-300 after:ease-in-out 
                                hover:after:w-[100%] hover:after:left-0" 

                                to="/contact"
                            >
                                Contact/Feedback
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
