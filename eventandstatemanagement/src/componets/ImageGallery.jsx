import React, { useState } from "react";

export function ImageGallery({images})
{
    const [activeImage,setActiveImage]= useState(images[0]);

    const containerStyle = {
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
      };
    
      const mainImageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '16px',
      };
      const thumbnailContainerStyle = {
        justifyContent: 'center'
      };
    
      const thumbnailStyle = (img) => ({
        width: '80px',
        height: '60px',
        border: img === activeImage ? '3px solid #007bff' : '2px solid #ccc',
        borderRadius: '6px',
        cursor: 'pointer',
      });
    return(
        <>
            <div style={containerStyle}>
                <img src={activeImage} alt="Main" style={mainImageStyle} />
                <div style={thumbnailContainerStyle}>
                    {images.map((image,index)=>(
                        <img 
                        key={index}
                        src={image} 
                        alt="image"
                        style={thumbnailStyle(image)}
                        onClick={()=>setActiveImage(image)} />
                        
                    ))}
                </div>

            </div>
        
        </>
    )

}