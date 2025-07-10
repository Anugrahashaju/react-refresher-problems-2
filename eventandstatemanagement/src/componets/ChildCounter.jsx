import React from "react";

export function ChildCounter({count,onIncrement}){

    return(
        <div>
            <h3>Child counter: {count}</h3>
            <button onClick={onIncrement}> Increment</button>
        </div>
    )
}