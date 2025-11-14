import { useState } from "react";
import DropDown from "./DropDown";

function Note({index, title, content, width, height, font, handleFocus, handleDelete}){

    return(
        <div className={`w-${width} h-${height} p-5 text-[#32302f] border-solid border-3 border-[#a89984] shadow-2xl/150 rounded-xl hover:cursor-pointer bg-[#ebdbb2]`}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <hr/>
            <div className="w-full overflow-hidden" onClick={() => handleFocus(index)}>
                <textarea rows={9} value={content} readOnly className={`w-full text-[#32302f] text-${font} resize-none focus:outline-none`}>
                </textarea>
            </div>
            <DropDown handleDelete={handleDelete} index={index}/>
        </div>
    )
}

export default Note;
