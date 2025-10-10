import { useEffect, useState } from "react";
import Book from "./Book";

function SearchComp({hidVar, infoBack}){
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setIsHidden] = useState(hidVar);

    useEffect(() =>{

        const searchQuery = async(e) =>{
            if(query.length > 0){
                await fetch(`https://openlibrary.org/search.json?q=${query}&limit=25`) 
                    .then(res => res.json())
                    .then(data =>{
                        setData(data.docs); 
                        console.log(data);
                    }).
                    catch(error =>{
                        console.error("Error: ", error);
                    });
            }
            else{
                setData([]);
                setQuery("");
            }
        }

        searchQuery();
    }, [query]);

    const handleHidden = () =>{
        infoBack(!isHidden);
    }

    function addBook(title, author, olid){
    }

    return(
        <div id="overlay" className={`h-full overflow-scroll fixed inset-0 bg-black/75`}>
            <div className="absolute w-full mt-20 pr-20 pl-20">
                <div className="absolute float-right mr-20">
                    <button type="button" 
                        className="text-4xl text-[#a89984] cursor-pointer" 
                        onClick={handleHidden}
                    >
                    X
                    </button>
                </div>
                <h1 className="font-bold text-5xl text-[#a89984] text-center mb-10">Add a book</h1>
                <input
                    type="search"
                    name="search_form"
                    id="search_form"
                    size={50}
                    value={query}
                    onChange={(e) => (setQuery(e.target.value))}
                    placeholder="Search for a book"
                    className={`bg-white text-md text-black rounded-xl p-2 mb-20 border-solid border-3 border-[#a89984]
                    focus:border-sky-500 focus:outline placeholder:italic block ml-auto mr-auto`}
                />

                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((item) =>(
                        <Book
                            title={item.title}
                            author={item.author_name}
                            olid={item.cover_edition_key}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SearchComp;
