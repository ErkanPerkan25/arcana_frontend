import { useState } from "react";

function Footer(){
    const [copyright, setCopyright] = useState("© 2025 www.your-site.com")

    const handleCopyright = () =>{
        const newCopyRight = document.getElementById("copyright");
        newCopyRight.innerHTML = "© 2025 - "+new Date().getFullYear()+" - All Rights Reserved";
        setCopyright(newCopyRight);
    }

    return(
        <div className="w-full fixed bottom-0 text-[#ebdbb2] p-2">
            <div>
                <h1 className="text-2xl font-bold text-[#fe8019]">Arcana</h1>
            </div>
            <div id="copyright" className="w-full text-center ml-auto mr-auto mb-5" onChange={handleCopyright}>
                {copyright}
            </div>
        </div>
    )
}

export default Footer;
