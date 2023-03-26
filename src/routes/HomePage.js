import React from "react";
import { useContext } from "react";
import { MainTitle } from "../componentes/MainTitle";
import { TendenciasMovies } from "../componentes/tendencias";
import { MainContainer } from "../componentes/MainContainer";
import { LikedMovies } from "../componentes/likedMovies";
import { MovieContext } from "../hooks/MovieProvider";
import img from "../img/pira.jpg";
import { Search} from "../componentes/search";
import { Categories} from '../componentes/categories';
import './HomePage.css'
function HomePage() {
    const { likedMovies } = useContext(MovieContext);
    return (
        <MainContainer className="main-container">
            <MainTitle
                title='MoviesApp'
                img={img}
            />
            <Search/>
            <TendenciasMovies/>
            <LikedMovies
                movies={likedMovies}
            />
            <Categories/>
        </MainContainer>
    )
}
export { HomePage }