import { useState } from "react";
import NoteForm from "./NoteForm";

function OverlayComponent({note, hiddenStatus, onNoteUpdate}){
    const [isHidden, setIsHidden] = useState(hiddenStatus)

    const handleHidden = () =>{
        hiddenStatus(!isHidden);
    }

    return(
        <div className={`h-full overflow-scroll fixed inset-0 bg-black/75`}>
            <div className="absolute w-full mt-20 pr-20 pl-20">
                <div className="relative float-left mr-20">
                    <button type="button" 
                        className="text-4xl text-[#a89984] cursor-pointer" 
                        onClick={handleHidden}
                    >
                    X
                    </button>
                </div>

                <div className="w-full">
                    <div className="m-25">
                        <NoteForm font={"xl"} note={note} onNoteUpdate={onNoteUpdate} width={160} height={250}/> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OverlayComponent;
