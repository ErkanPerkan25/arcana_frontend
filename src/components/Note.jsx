import { useState } from "react";

function Note({title, content}){
    return(
        <div className="w-130 h-85 border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]">
            <h1 placeholder="Title"></h1>
            <textarea placeholder="Content" rows={12} className="w-full text-[#32302f] resize-none focus:outline-none">
            </textarea>
        </div>
    )
}

export default Note;
