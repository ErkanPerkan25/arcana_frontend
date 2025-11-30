import { useEffect, useState } from "react";
import { apiUrl } from "../api/apiUrl";
import { useAuth } from "./auth/useAuth";
import BookSearch from "./BookSearch";

function SearchComp({hidVar, infoBack}){
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [isHidden, setIsHidden] = useState(hidVar);
    const auth = useAuth();

    const addBook = async(index) =>{
        const book = data[index];
        await fetch(`${apiUrl}/books/addBook`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${auth.token}`,
                },
                body: JSON.stringify({
                    title: book.title,
                    author: book.author_name[0],
                    olid: book.cover_edition_key,
                    cookie: auth
                })
            })
            .then(res => {
                if(res.status === 201){
                    alert(`You added ${book.title} to your collection!`);
                    infoBack(!isHidden);
                    //location.reload();
                }
            })
            .catch(error =>{
                throw error;
            });
    }

    useEffect(() =>{

        const searchQuery = async(e) =>{
            if(query.length > 0){
                await fetch(`https://openlibrary.org/search.json?q=${query}&limit=25`, {
                    method: "GET",
                    headers: {
                    }
                }) 
                    .then(res => res.json())
                    .then(data =>{
                        setData(data.docs); 
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


    return(
        <div id="overlay" className={`min-h-screen w-full overflow-scroll fixed inset-0 bg-black/80`}>
            <div className="absolute w-full mt-5 p-10">
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
                    className={`w-90 sm:w-100 md:w-110 lg:w-120 bg-white text-md text-black rounded-xl p-2 mb-20 border-solid border-3 border-[#a89984]
                    focus:border-sky-500 focus:outline placeholder:italic block ml-auto mr-auto`}
                />

                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {!data ? "" :
                        data.map((item, index) =>(
                        <div
                            key={index}
                            onClick={() => addBook(index)}
                        >
                            <BookSearch
                                key={index}
                                book={item}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SearchComp;
