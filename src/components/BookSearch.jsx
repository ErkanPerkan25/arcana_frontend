import { useState } from "react";

function BookSearch({book,index}){
    return(
        <div className="w-80 text-[#ebdbb2] font-bold text-xl text-center" >
            <img 
                className="w-80 h-125 mr-auto ml-auto border-solid border-3 border-[#a89984] shadow-2xl/150 mb-3 rounded-xl hover:cursor-pointer" 
                src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`} 
                alt="book cover"
            />
            <h1>{book.title}</h1>
            <p>{book.author_name}</p>
        </div>
    )
}

export default BookSearch;
