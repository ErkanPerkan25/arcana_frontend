import { useState, useEffect } from "react";
import OverlayComponent from "./OverlayComponent";
import Note from "./Note";

function NoteCollection({book_id}){
    const [notes, setNotes] = useState([]);

    const [isFocus, setIsFocus] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [addNote, setAddNote] = useState(false);

    const getNotes = async(e) =>{

    }

    const handleAddBook = () =>{
        setIsHidden(!isHidden);
        setAddNote(true);
    }

    const handleHidden = () =>{
        setIsHidden(!isHidden);
    }
    
    const setDataFromChild = (data) =>{
        setIsHidden(data);
    }

    return(
        <div className="mt-15 text-[#ebdbb2]">
            <h1 className="text-center text-3xl font-bold">{book_id}</h1>

            <div className="float-right mr-40">
                <button 
                    className="block w-10 text-xl bg-[#89b482] rounded-md p-1 mr-auto ml-auto cursor-pointer"
                    type="button"
                    onClick={handleAddBook}
                >
                    +
                </button>
            </div>
            <br />
            
            <div>
                {!isHidden && addNote ? <OverlayComponent type={"add"} hiddenStatues={setDataFromChild}/> : ""}
            </div>
        </div>
    )
}

export default NoteCollection;
