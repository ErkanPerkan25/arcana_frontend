import { useState } from "react";

function OverlayComponent({type, hiddenStatues}){
    const [isHidden, setIsHidden] = useState(hiddenStatues)

    const handleHidden = () =>{
        hiddenStatues(!isHidden);
    }

    const setDataFromChild = (data) =>{
        setIsHidden(data);
    }

    return(
        <div className={`h-full overflow-scroll fixed inset-0 bg-black/75`}>
            <div className="absolute w-full mt-20 pr-20 pl-20">
                <div className="absolute float-right mr-20">
                    <button type="button" 
                        className="text-4xl text-[#a89984] cursor-pointer" 
                        onClick={handleHidden}
                    >
                    X
                    </button>
                </div>

            </div>
        </div>
    )
}

export default OverlayComponent;
