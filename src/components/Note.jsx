import { useState } from "react";

function Note({title, content, width, height, font}){
    return(
        <div className={`w-${width} h-${height} p-5 text-[#32302f] border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]`}>
            <h1 aria-placeholder="Title" className="text-2xl font-bold">{title}</h1>
            <hr/>
            <br/>
            <div>
                <textarea rows={12} readOnly className={`w-full text-[#32302f] text-${font} resize-none focus:outline-none`}>
                    {content}
                </textarea>
            </div>
        </div>
    )
}

export default Note;
