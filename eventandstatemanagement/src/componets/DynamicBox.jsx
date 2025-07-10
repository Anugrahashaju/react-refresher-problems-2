import { useState } from "react";

export function DynamicBox(){
    
    const MIN_SIZE = 20;
    const STEP = 20;
    const [size,setSize]=useState(100);
    const increaseSize =()=>
    {
        setSize(prev=>prev+STEP)
    }
    const decreaseSize=()=>
    {
        setSize(prev=>prev > MIN_SIZE ? prev-STEP: prev);
    }

    const boxStyle ={
        width: `${size}px`,
        height:`${size}px`,
        backgroundColor:'red',
        margin:'20px auto'
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <div style={boxStyle}></div>
                <button onClick={increaseSize} style={{ marginRight: '10px' }}>Increase Size</button>
                <button onClick={decreaseSize}>Decrease Size</button>
            </div>

        </>
    )
}