import { useState, useEffect } from "react";
import OverlayComponent from "./OverlayComponent";
import { useAuth } from "./auth/useAuth";
import Note from "./Note";
import { apiUrl } from "../api/apiUrl";
import DropDown from "./DropDown";

function NoteCollection({book_title, book_id}){
    const [notes, setNotes] = useState([]);
    const [focusedNote, setFocusedNote] = useState([])
    const [isHidden, setIsHidden] = useState(true);

    const auth = useAuth();

    const addNote = async(e) =>{
        await fetch(`${apiUrl}/notes/`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
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
        await getNotes();
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

    const deleteNote = async(index)  =>{
        const note = notes[index];
        await fetch(`${apiUrl}/notes?id=${note._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${auth.token}`
            },
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
        .throw(error =>{
            throw error;
        })

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
            
            {!isHidden ? <OverlayComponent note={focusedNote} onNoteUpdate={handleNoteUpdate} hiddenStatus={isHidden} infoBack={setDataFromChild}/> : ""}

            <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                    {notes.map((item, index) =>(
                        <div key={index} className="w-100 h-80 hover:cursor-pointer" >
                            <Note
                                key={index}
                                title={item.title} 
                                handleFocus={handleFocusNote}
                                content={item.content}
                                width={100}
                                height={80}
                                handleDelte={deleteNote}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default NoteCollection;
