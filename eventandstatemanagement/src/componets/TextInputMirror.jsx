import React, { useState } from "react";

export function TextInputMirror() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type Something "
        style={{padding:'8px',width:'100%'}}
      />
      <p style={{fontSize:'18px'}}>You typed: {text}</p>
    </div>
  );
}
