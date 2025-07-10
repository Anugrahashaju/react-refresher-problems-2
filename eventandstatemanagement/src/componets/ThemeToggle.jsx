import { useState } from "react";
import React from "react";
import "../App.css";

export function ThemeToggle(){
    const[isLightmode,setIsLightMode] = useState(false);

    const toggleTheme=()=>
    {
        document.body.classList.toggle('light-mode');
        setIsLightMode(!isLightmode);
    }
    return(
        <div>
            <button onClick={toggleTheme}>
                {isLightmode?'diable Light Mode':'enable Light Mode'}
            </button>
        </div>
    )
}