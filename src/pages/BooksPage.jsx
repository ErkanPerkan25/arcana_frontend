import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import SearchComp from "../components/SearchComp";
import { apiUrl } from "../api/apiUrl";


function BooksPage(){
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setHidden] = useState(true);
     

    const handleHidden = () =>{
        setHidden(!isHidden);
    }

    const setDataFromChild = (data) =>{
        setHidden(data);
    }

    useEffect(() =>{

        const bookData = async(e) =>{
            await fetch(`${apiUrl}/books`,{
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

        if(isHidden == true){
            bookData();
        }
        else{
            bookData();
        }

    }, [isHidden]);
    
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
            <div className="m-20">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-15">
                    {!data ? "" : 
                        data.map((item,index) =>(
                            <div>
                                <Link to={`/books/${item._id}/${item.title}`}>
                                    <Book 
                                        key={index}
                                        title={item.title}
                                        author={item.author}
                                        olid={item.olid}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BooksPage;
