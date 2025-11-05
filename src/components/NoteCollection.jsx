import { useState, useEffect } from "react";
import OverlayComponent from "./OverlayComponent";
import { useAuth } from "./auth/useAuth";
import Note from "./Note";
import { apiUrl } from "../api/apiUrl";

function NoteCollection({book_title, book_id}){
    const [notes, setNotes] = useState([]);
    const [isFocus, setIsFocus] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const auth = useAuth();


    const addNote = async(e) =>{
        await fetch(`${apiUrl}/notes/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}`,
                },
                body: JSON.stringify({
                    book_id: book_id,
                    book_title: book_title,
                    cookie: auth
                })
            })
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                throw error;
            });
    }

    const handleAddBook = () =>{
        setIsHidden(!isHidden);
        setNotes(<Note width={100} height={150}/>)
    }

    const handleHidden = () =>{
        setIsHidden(!isHidden);
    }
    
    const setDataFromChild = (data) =>{
        setIsHidden(data);
    }
    
    useEffect(() =>{

        const getNotes = async(e) =>{
            await fetch(`${apiUrl}/notes/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${auth.token}`,
                    },
                    body: JSON.stringify({
                        book_id: book_id,
                        book_title: book_title,
                        cookie: auth
                    })
                })
                .then(response =>{
                    console.log(response);
                })
                .catch(error =>{
                    throw error;
                });
        }

        getNotes();
    }, [auth, book_id, book_title]);

    return(
        <div className="mt-15 text-[#ebdbb2]">
            <h1 className="text-center text-3xl font-bold">{book_title}</h1>

            <div className="float-right mr-40">
                <button 
                    className="block w-10 text-xl bg-[#89b482] rounded-md p-1 mr-auto ml-auto cursor-pointer"
                    type="button"
                    onClick={addNote}
                >
                    +
                </button>
            </div>
            <br />
            
            <div className="">
                {!isHidden ? <OverlayComponent hiddenStatues={setDataFromChild}/> : ""}
            </div>

        </div>
    )
}

export default NoteCollection;
