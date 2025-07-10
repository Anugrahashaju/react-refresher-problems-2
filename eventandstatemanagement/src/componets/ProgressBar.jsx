import { useState } from "react";

export function ProgressBar()
{
    const [percentage,setPercentage] = useState(0);

    const handleChange = (e)=>{
        const value = parseInt(e.target.value);
        if(!isNaN(value)&& value>=0 && value<=100)
        {
            setPercentage(value);
        }
        else if(e.target.value==="")
        {
            setPercentage(0);
        }
    };

    return (
        <div style={{ width: "300px", margin: "30px auto", textAlign: "center" }}>
          <input
            type="number"
            value={percentage}
            onChange={handleChange}
            placeholder="Enter percentage"
            style={{ width: "150px", marginBottom: "10px" }}
          />
          <div
            style={{
              width: "100%",
              height: "25px",
              backgroundColor: "#eee",
              border: "1px solid #ccc",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${percentage}%`,
                backgroundColor: "#4caf50",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>
          <p>{percentage}%</p>
        </div>
      );
}