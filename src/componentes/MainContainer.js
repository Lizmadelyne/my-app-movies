import React from "react";
import './MainContainer.css';

function MainContainer(props) {
    return (
        <div className="main-container">
            {props.children}
        
        </div>
    )
}

export { MainContainer }