import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function Book({book, index, handleDelete}){
    return(
        <div className="w-70 sm:w-70 md:w-80 text-[#ebdbb2] font-bold text-xl text-center" >

                <Link to={`/books/${book._id}/${book.title}`}>
                    <img 
                        className="mr-auto ml-auto border-solid border-3 border-[#ebdbb2] shadow-2xl/150 mb-3 rounded-xl hover:cursor-pointer" 
                        src={`https://covers.openlibrary.org/b/olid/${book.olid}-L.jpg`} 
                        alt="book cover"
                    />
                </Link>
                <DropDown handleDelete={handleDelete} index={index}/>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
        </div>
    );
}

export default Book;
