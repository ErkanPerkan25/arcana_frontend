import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";

function NoteForm({title,content, width, height, font}){
    const [noteTitle, setTitle] = useState(title);
    const [noteContent, setContent] = useState(content);
    const [isEditing, setIsEditing] = useState(false);

    const handleBlur = (e) =>{
        setIsEditing(false);
        setTitle(e.target.value);
    }

    const textHandler = (e) =>{
        setContent(e.target.value());
    }

    const saveHandler = (e) =>{
        //await fetch(`${apiUrl}/note/`)
    }

    useEffect(() =>{

    }, []);

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
            <textarea placeholder="Type..." rows={12} autoFocus className={`w-full text-${font} resize-none focus:outline-none`}>
                {noteContent}
            </textarea>
            <div>
            </div>
        </div>
    )
}

export default NoteForm;
