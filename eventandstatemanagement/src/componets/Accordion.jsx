import React, { useState } from "react";
export function Accordion({panels})
{
    const [activeIndex, setActiveIndex] = useState(null);

    const togglepanel = (index) =>{
        setActiveIndex(prevIndex => (prevIndex===index?null:index ));   
    }
        const panelStyle ={
            border: '1px solid #ccc',
            borderRadius:'5px',
            marginBottom:'10px',
        };
    
        return(
            <>
                {panels.map((panel,index)=>(
                    <div key={index} style={panelStyle}>
                        <div onClick={()=>togglepanel(index)}>
                            {panel.title}
                        </div>
                        {activeIndex===index &&(
                            <div>
                                {panel.content}
                            </div>
                        )}
                    </div>
                ))}
            </>
        )
}