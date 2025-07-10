import React, { useState } from "react";

export function ImageGallery({images})
{
    const [activeImage,setActiveImage]= useState(images[0]);

    return(
        <div style={{textAlign:'center', maxWidth:'600px',margin:'2rem auto'}}>

            <img 
            src="{activeImage}" 
            alt="active"
            style={{
                width:'100%',
                height:'auto',
            }} />

            <div>
                {}
            </div>

        </div>
    )

}