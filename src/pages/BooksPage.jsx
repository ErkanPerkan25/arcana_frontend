import { useEffect, useState } from "react";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import SearchComp from "../components/SearchComp";

function BooksPage(){
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setHidden] = useState(true);
     
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

    const handleHidden = () =>{
        setHidden(!isHidden);
    }

    const setDataFromChild = (data) =>{
        setHidden(data);
    }


    //console.log(data);

    useEffect(() =>{
        bookData();
    }, []);


    console.log(isHidden);

    
    return(
        <div className="relative w-screen h-screen bg-[#32302f]">
            <Navbar />
            <h1 className="text-3xl text-[#a89984] font-bold text-center">Book Collection</h1>
            <div className="float-right mr-40">
                <button 
                    className="block w-10 text-xl bg-[#89b482] rounded-md p-1 mr-auto ml-auto cursor-pointer"
                    type="button"
                    onClick={handleHidden}
                >
                    +
                </button>
            </div>
            {isHidden ? "" : <SearchComp hidVar={isHidden} infoBack={setDataFromChild}/>}
            <div className="mt-15 p-10">
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
