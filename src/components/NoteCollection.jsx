import { useState, useEffect } from "react";
import OverlayComponent from "./OverlayComponent";
import { useAuth } from "./auth/useAuth";
import Note from "./Note";
import { apiUrl } from "../api/apiUrl";

function NoteCollection({book_title, book_id}){
    const [notes, setNotes] = useState([]);
    const [focusedNote, setFocusedNote] = useState([])
    const [isHidden, setIsHidden] = useState(true);

    const auth = useAuth();

    const addNote = async(e) =>{
        await fetch(`${apiUrl}/notes/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}`,
                },
                body: JSON.stringify({
                    book_id: book_id,
                    book_title: book_title,
                    cookie: auth
                })
            })
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                throw error;
            });
    }

    const handleFocusNote = (index) =>{
        const note = notes[index];
        setIsHidden(!isHidden);
        setFocusedNote(note);
    }
    
    const setDataFromChild = (data) =>{
        setIsHidden(data);
    }

    const getNotes = async(e) =>{
        await fetch(`${apiUrl}/notes?book_id=${book_id}&user_id=${auth.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": `Bearer ${auth.token}`,
                },
            })
            .then(response => response.json())
            .then(data =>{
                setNotes(data);
                console.log(data);
            })
            .catch(error =>{
                throw error;
            });
    }

    const handleNoteUpdate = async() =>{
        await getNotes();
    }
    
    useEffect(() =>{
        getNotes();
    }, []);

    return(
        <div className="mt-15 text-[#ebdbb2]">
            <h1 className="text-center text-3xl font-bold">{book_title}</h1>

            <div className="float-right mr-40">
                <button 
                    className="block w-12 h-12 text-3xl text-black bg-[#89b482] rounded-full p-1 mr-auto ml-auto cursor-pointer"
                    type="button"
                    onClick={addNote}
                >
                    +
                </button>
            </div>
            <br />
            
            <div className="">
                {!isHidden ? <OverlayComponent note={focusedNote} onNoteUpdate={handleNoteUpdate} hiddenStatus={isHidden} infoBack={setDataFromChild}/> : ""}
            </div>

            <div className="m-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">
                    {notes.map((item, index) =>(
                        <div key={index} className="hover:cursor-pointer" onClick={() => handleFocusNote(index)}>
                            <Note
                                key={index}
                                title={item.title} 
                                content={item.content}
                                width={100}
                                height={70}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default NoteCollection;
