import React,{useState} from "react";
import { ChildCounter } from "./ChildCounter";
export function ParentComponent()
{
    const [childCount,setChildCount] = useState(0);

    const handleIncrement=()=>
    {
        setChildCount(prev=>prev+1);
    }

    const handleReset=()=>
    {
        setChildCount(0);
    }

    return(
        <div>
            <h2>Parent Component</h2>
            <ChildCounter count={childCount} onIncrement={handleIncrement}/>
            <button onClick={handleReset}>Reset</button>

        </div>
    );
}