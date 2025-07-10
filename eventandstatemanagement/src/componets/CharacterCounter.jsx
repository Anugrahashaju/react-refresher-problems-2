import React,{useState} from "react";
export function CharacterCount(){
    const [text,setText] = useState('');
    const Limit = 100;


    const handleChange=(event)=>{
        setText(event.target.value);
    }

    const charCount = text.length;
    const isLimitExceeded = charCount > Limit;

    return(
        <div>
            <label htmlFor="textarea">Enter your message: </label>
            <textarea id="textarea" rows="5" cols="50" value={text} onChange={handleChange}
            style={{padding:"8px",width:"100%"}}>

            </textarea>
            <p>Character count: {charCount}/{Limit}</p>
            {isLimitExceeded && (
                <p>Character Limit Exceeded</p>
            )}
        </div>
    )
}