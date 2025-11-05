import { useState } from "react";
import { useParams } from "react-router-dom";
import NoteCollection from "../components/NoteCollection";
import Navbar from "../components/Navbar";

function NotesPage({book_id}){
    const params = useParams();

    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <Navbar />
            <NoteCollection book_title={params.book_title} book_id={params.book_id}/>
        </div>
    );
}

export default NotesPage;
