import { useState } from "react";
import { Link } from "react-router-dom";

function Book({title, author, olid}){
    return(
        <div className="w-80 text-[#a89984] font-bold text-xl text-center" >
            <Link to={`/notes/${title}`}>
                <img 
                    className="w-80 h-125 mr-auto ml-auto border-solid border-3 border-[#a89984] shadow-2xl/150 mb-3 rounded-xl hover:cursor-pointer" 
                    src={`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`} 
                    alt="book cover"
                />
            </Link>
            <h1>{title}</h1>
            <p>{author}</p>
        </div>
    );
}

export default Book;
