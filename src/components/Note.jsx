import { useState } from "react";

function Note({title, content, width, height, font}){
    return(
        <div className={`w-${width} h-${height} p-10 border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]`}>
            <h1 placeholder="Title"></h1>
            <hr/>
            <textarea placeholder="Type..." rows={12} className={`w-full text-[#32302f] text-${font} resize-none focus:outline-none`}>
            </textarea>
            <div>
            </div>
        </div>
    )
}

export default Note;
