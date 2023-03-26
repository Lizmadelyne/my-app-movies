import { SecondaryContainer } from "./secondaryContainer";
import { MoviesContainer } from "./MoviesContainer";
import { MovieContext } from "../hooks/MovieProvider";
import { useContext } from "react";
import "./search.css";
function Search(){
    const { searchedMovies, setQuery, query, getSearchResult } = useContext(MovieContext);
    return ( 
        <>
        <SecondaryContainer>
            <h2>Search</h2>
            <form className="search-form" 
                onSubmit={(e)=>{
                    e.preventDefault()
                    getSearchResult(query)
                }}>
                <div className="flex-form">
                    <input 
                        type="text" 
                        placeholder="Enter a movie title" 
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value)
                        }}
                        />
                    <button  className="btn-search" type="submit" >Search</button>
                </div>
            </form>
            
        </SecondaryContainer>
        <SecondaryContainer>
            <MoviesContainer
                    movies={searchedMovies}
                    />
        </SecondaryContainer>
        </>
    )
}
export { Search }