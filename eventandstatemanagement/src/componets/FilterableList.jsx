import React from "react";
import { useState } from "react";

export function FilterableList()
{
    const fruits = ['Apple','Banana','Orange','Mango','Pineapple'];
    const[query,setQuery] = useState('');

    const handleChange=(event)=>
    {
        setQuery(event.target.value);
    };

    const filteredFruit = fruits.filter((fruits)=>
        fruits.toLowerCase().includes(query.toLowerCase())
    );

    return(
        <div>
            <input type="text"
            placeholder="Seach Fruits"
            value={query}
            onChange={handleChange}
             />
            <ul>
                {filteredFruit.length>0?(
                    filteredFruit.map((fruits)=>
                    (
                        <li>{fruits}</li>
                    ))
                ):(
                    <li>No Matches Found</li>
                )}
            </ul>
        </div>
    )
}