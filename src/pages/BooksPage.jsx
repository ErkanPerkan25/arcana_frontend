import { useEffect, useState } from "react";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import SearchComp from "../components/SearchComp";

function BooksPage(){
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

     
    const bookData = async(e) =>{
        fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings",{
            headers: {
                //"User-Agent" : "Arcana/1.0 (ericahansson.united@gmail.com)"
            }
        })
        .then(response => response.json())
        .then(data =>{
            setData(data.docs[0]);
            //console.log(data.docs[0].title);
        })
        .catch(error =>{
            console.error("Error: ", error);
        });

    }

    console.log(data);

    useEffect(() =>{
        bookData();
    }, []);
    
    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <Navbar />
            <div>
                <button 
                    className="block w-10 text-xl bg-[#89b482] rounded-md p-1 mr-auto ml-auto"
                    type="button"
                >
                    +
                </button>

                <SearchComp />
            </div>
            <div>
                <Book 
                    title={data.title}
                    author={data.author_name}
                    imgUrl={`https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-L.jpg`}
                />
            
            </div>
        </div>
    )
}

export default BooksPage;
