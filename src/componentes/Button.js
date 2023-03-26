import React from "react";
import {Link} from "react-router-dom";




function Button(props){
    return(
        <Link to={props.to}>
           
              {props.children}
        
        </Link>
    )
}

export { Button }