import { useEffect, useMemo, useState } from "react";
import { apiUrl } from "../api/apiUrl";
import { useAuth } from "./auth/useAuth";

function NoteForm({note, width, height, font, onNoteUpdate}){
    const [noteTitle, setTitle] = useState(note?.title || "");
    const [noteContent, setContent] = useState(note?.content || "");
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState("Saved");

    const auth = useAuth();

    const handleChange = (e) =>{
        setContent(e.target.value);
    }

    useEffect(() =>{
        const saveHandler = setTimeout(async() =>{
            if(!note?._id) return;
            setStatus("Saving...");
            await fetch(`${apiUrl}/notes/${note._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "Application/json",
                    "Authorization": `Bearer ${auth.token}`,
                },
                body: JSON.stringify({
                    title: noteTitle,
                    content: noteContent,
                    cookie: auth
                })
            })
            .then(response =>{
                console.log(response);
                setStatus("Saved");
                if(onNoteUpdate) onNoteUpdate();
            })
            .catch(error =>{
                console.log("Auto-save failed");
                setStatus("Error saving");
                throw error;
            })
        }, 1000);

        return () => clearTimeout(saveHandler);
    }, [note, auth, noteTitle, noteContent, onNoteUpdate]);

    console.log(noteTitle);

    return(
        <div className={`w-${width} h-${height} text-[#32302f] p-10 border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]`}>
            {isEditing ?
                <input 
                    value={noteTitle}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => setIsEditing(false)}
                    autoFocus
                    className="text-3xl font-bold"
                />
                :
                <h1 
                    onClick={() => setIsEditing(true)}
                    className="text-3xl font-bold"
                >
                    {noteTitle}
                </h1>
            }

            <hr/>
            <br/>
            <textarea placeholder="Type..." rows={12} autoFocus value={noteContent} onChange={handleChange} className={`w-full text-${font} resize-none focus:outline-none`}>
                {noteContent}
            </textarea>
            <div>
                {status}
            </div>
        </div>
    )
}

export default NoteForm;
