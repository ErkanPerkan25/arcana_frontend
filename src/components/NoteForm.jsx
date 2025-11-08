import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";
import { useAuth } from "./auth/useAuth";
import { debounce } from "lodash";

function NoteForm({note, width, height, font}){
    const [noteTitle, setTitle] = useState(note?.title || "");
    const [noteContent, setContent] = useState(note?.content || "");
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState("Saved");

    const auth = useAuth();

    const handleBlur = (e) =>{
        setIsEditing(false);
        setTitle(e.target.value);
    }

    const saveHandler = debounce(async (e) =>{
        setStatus("Saving...");
        await fetch(`${apiUrl}/notes/${note._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
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
        })
        .catch(error =>{
            throw error;
        })
        console.log("Auto saving notes");
        setStatus("Saved");
    }, 1000);

    const handleChange = (e) =>{
        //setTitle(e.target.value);
        setContent(e.target.value);
        saveHandler();
    }

    useEffect(() =>{
        setContent(note.content || "");
    }, [note]);

    return(
        <div className={`w-${width} h-${height} text-[#32302f] p-10 border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]`}>
            <h1 
                contentEditable={isEditing} 
                suppressContentEditableWarning={true}
                onBlur={handleBlur} 
                onClick={() => setIsEditing(true)} 
                className="text-3xl font-bold"
            >
                {noteTitle}
            </h1>

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
