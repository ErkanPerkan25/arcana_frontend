import { useState } from "react";
import { useParams } from "react-router-dom";
import NoteCollection from "../components/NoteCollection";

function NotesPage({book_id}){
    const params = useParams();

    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <NoteCollection book_id={params.book_id}/>
        </div>
    );
}

export default NotesPage;
