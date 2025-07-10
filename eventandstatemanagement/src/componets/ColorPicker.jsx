import { useState } from "react";

export function ColorPicker()
{
    const color=["tomato","lime","aqua","yellow","hotpink","gold"];
    //initial as red
    const [currentColor,setCurrentColor] = useState("tomato");

    const boxStyle = {
        width: "200px",
        height:"200px",
        backgroundColor:currentColor.toLowerCase(),
        margin:"20px auto",
        border:"2px solid #000"
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <div style={boxStyle}></div>
                {color.map((color)=>(
                    <button
                    key={color}
                    onClick={()=>setCurrentColor(color)}
                    style={{backgroundColor:color}}>{color}</button>
                ))}
            </div>
        </>
    )
}