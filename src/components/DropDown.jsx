import { useState } from "react";

function DropDown({handleDelete}){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown = () =>{
        setIsOpen(!isOpen);
    };

    return(
        <div className="inline-block text-left hover:bg-gray-100 rounded-full">
            <div className="w-8 bottom-0">
                <button onClick={toggleDropDown}
                >
                    <img src="/assets/menu.png"/> 
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right right-0 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown;
