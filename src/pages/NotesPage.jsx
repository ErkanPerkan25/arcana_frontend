import { useState } from "react";
import { useParams } from "react-router-dom";
import NoteCollection from "../components/NoteCollection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotesPage({book_id}){
    const params = useParams();

    return(
        <div className="font-display overscroll-none p-0 m-0 relative w-screen min-h-screen bg-[#32302f]">
            <Navbar />
            <NoteCollection book_title={params.book_title} book_id={params.book_id}/>
            <Footer />
        </div>
    );
}

export default NotesPage;
