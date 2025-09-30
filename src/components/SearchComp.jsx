import { useEffect, useState } from "react";
import Book from "./Book";

function SearchComp(){
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
   

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
            }
        }

        searchQuery();
    }, [query]);


    //console.log(data);

    return(
        <div>
            <div>
                <input
                    type="search"
                    name="search_form"
                    id="search_form"
                    value={query}
                    onChange={(e) => (setQuery(e.target.value))}
                    placeholder="Search for a book"
                    className={`bg-white text-md text-black rounded-xl p-2 mb-1 mt-1 border-solid border-3 border-[#a89984]
                    focus:border-sky-500 focus:outline`}
                />
            </div>
            <div>
                {data.map((item) =>(
                    <Book 
                        title={item.title}
                        author={item.author_name}
                        imgUrl={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-L.jpg`}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchComp;
