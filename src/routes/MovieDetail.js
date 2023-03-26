import React from "react";
import { useLocation } from "react-router-dom";
import { MainContainer } from "../componentes/MainContainer";
import { MainTitle} from "../componentes/MainTitle";
import { Button } from "../componentes/Button";

  function MovieDetail(){
    const location  = useLocation();
    const movie = location.state.movie

    return(
        <MainContainer>
            <MainTitle
            title={movie.title}
            img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            
            />
            <secondaryContainer>
                <h2>{movie.title}</h2>
              <Button to='/'>Back</Button>
            </secondaryContainer>

          
        </MainContainer>
    )

  }

  export { MovieDetail }