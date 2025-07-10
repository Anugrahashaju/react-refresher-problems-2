import React,{useState} from "react";

export function TodoList()
{
    const[todo,setTodo] = useState([]);
    const[val,setVal] = useState("");

    const handleChange=(e)=>
    {
        setVal(e.target.value);
    }

    const handleAdd = ()=>
    {
        setTodo([...todo,val])
        
    }

    function removeItem(it){
        const temp = todo.filter(n=>n!==it);
        setTodo(temp);
        
    }

    return(
        <>
            <input type="text"
            onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todo.map((item,index)=>
                (
                    <li key={index}>{item}
                    <button onClick={()=>removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}