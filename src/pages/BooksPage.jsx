import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import SearchComp from "../components/SearchComp";
import { apiUrl } from "../api/apiUrl";
import { useAuth } from "../components/auth/useAuth";
import Footer from "../components/Footer";


function BooksPage(){
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setHidden] = useState(true);

    const auth = useAuth();
     

    const handleHidden = () =>{
        setHidden(!isHidden);
    }

    const setDataFromChild = (data) =>{
        setHidden(data);
    }

    const deleteBook = async(index) =>{
        const book = data[index];
        await fetch(`${apiUrl}/books/${book._id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${auth.token}`,
            },
            body: JSON.stringify({
                cookie: auth
            })
        })
        .then(response =>{
            console.log(response);
        })
        .catch(error =>{
            throw error;
        })

        await bookData();
    }


    const bookData = async(e) =>{
        await fetch(`${apiUrl}/books`,{
            method: "GET",
            headers: {
                //"User-Agent" : "Arcana/1.0 (ericahansson.united@gmail.com)"
                "Authorization": `Bearer ${sessionStorage.getItem("sessionID")}`,
            }
        })
        .then(response => response.json())
        .then(data =>{
            setData(data);
            console.log(data);
        })
        .catch(error =>{
            console.error("Error: ", error);
        });

    }
    useEffect(() =>{

        if(isHidden == true){
            bookData();
        }
        else{
            bookData();
        }

    }, [isHidden]);
    
    return(
        <div className="font-display overscroll-none p-1 relative w-screen min-h-screen bg-[#32302f]">
            <Navbar />
            <h1 className="text-3xl text-[#d3869b] font-bold text-center">Book Collection</h1>
            <div className="float-right mr-40">
                <button 
                    className="block w-12 h-12 text-3xl bg-[#89b482] rounded-full p-1 mr-auto ml-auto cursor-pointer"
                    type="button"
                    onClick={handleHidden}
                >
                    +
                </button>
            </div>
            <div className="m-10 p-10">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-15">
                    {!data ? "" : 
                        data.map((item,index) =>(
                            <div className="transition duration-200 ease-in-out hover:scale-105" key={index}>
                                    <Book 
                                        key={index}
                                        index={index}
                                        book={item}
                                        handleDelete={deleteBook}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
            {isHidden ? null : <SearchComp hidVar={isHidden} infoBack={setDataFromChild}/>}
        </div>
    )
}

export default BooksPage;
