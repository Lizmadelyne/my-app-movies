import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../hooks/MovieProvider";
import { secondaryContainer } from "./secondaryContainer";
import './categories.css';

function Categories (){
    const navigate = useNavigate()
    const {categories, getMoviesByCategory} = useContext(MovieContext)
    return(
      <secondaryContainer>
        <h2>Categories</h2>
        <div className="category-container">
                {categories.map((category)=> (
                    <div key={category.id} className="category" onClick={ async () => {
                        await getMoviesByCategory(category.id)
                        navigate(`/categoryDetail/${category.name}`)
                    }} >{category.name}</div>
                ))}
            </div>
      </secondaryContainer>
    )
}
export { Categories }