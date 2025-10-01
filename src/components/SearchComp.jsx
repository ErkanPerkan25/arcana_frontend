import { useEffect, useState } from "react";
import Book from "./Book";

function SearchComp({hidVar}){
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setIsHidden] = useState(hidVar);
   

    useEffect(() =>{

        const searchQuery = async(e) =>{
            if(query){
                await fetch(`https://openlibrary.org/search.json?q=${query}`) 
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


    return(
        <div id="searchComp" className="" >
            <div id="overlay" className={`${isHidden ? "hidden" : "block"} absolute inset-0 bg-black opacity-75`} />
            <div className="relative float-right mr-20">
                <span className="text-4xl text-[#a89984]" onClick={() => setIsHidden(true)}>X</span>
            </div>
            <div className="absolute w-full pr-20 pl-20">
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
                            imgUrl={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SearchComp;
