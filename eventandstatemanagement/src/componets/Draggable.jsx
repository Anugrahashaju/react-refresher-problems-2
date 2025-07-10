import { useState,useRef } from "react";

export function Draggable(){
    const [position, setPosition] = useState({ top: 100, left: 100 });
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });
  
    const handleMouseDown = (e) => {
      isDragging.current = true;
      offset.current = {
        x: e.clientX - position.left,
        y: e.clientY - position.top
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const newLeft = e.clientX - offset.current.x;
      const newTop = e.clientY - offset.current.y;
      setPosition({ left: newLeft, top: newTop });
    };
  
    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  
    return (
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "salmon",
          position: "absolute",
          left: position.left,
          top: position.top,
          cursor: "grab",
          userSelect: "none"
        }}
      />
    );
}