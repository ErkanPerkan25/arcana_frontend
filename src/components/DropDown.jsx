import { useEffect, useRef, useState } from "react";

function DropDown({handleDelete, index}){
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);

    const toggleDropDown = () =>{
        setIsOpen(!isOpen);
    };

    useEffect(() =>{
        function handleClicOutside(e){
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClicOutside); // Add listenter 
        return () => document.removeEventListener("mousedown", handleClicOutside); // Destory listenter
    },[])


    return(
        <div className="float-right inline-block text-left" ref={dropDownRef}>
            <div>
                <button onClick={toggleDropDown}
                    className="w-full inline-flex justify-center hover:bg-[#928374] rounded-full mt-auto mb-auto"
                >
                    <img src="/assets/menu.png" className="w-10"/> 
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-left absolute w-24 rounded-md shadow-lg bg-white ring-1 ring-[#a89984] ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleDelete(index)}>Delete</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown;
