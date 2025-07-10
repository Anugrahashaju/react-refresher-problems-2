import React from "react";
import { use } from "react";
import { useState } from "react";

export function FormValidation(){
    const [email, setEmail] = useState('');
    const[password,setPassword]=useState('');

    const[emailerror,setEmailError] = useState('');
    const[passworderror,setPasswordError] = useState('');

    const handleSubmit =(e)=>
    {
        e.preventDefault();

        let valid = true;
        //Reset all the values
        setEmailError('');
        setPasswordError('');

        //emailValidation
        if(!email.includes("@"))
        {
            setEmailError('Email must contain "@" ');
            valid =false;
        }

        //passwordValidation
        if(password.length<6)
        {
            setPasswordError("Password should atleast contain 6 values");
            valid = false;
        }

        if(valid)
        {
            alert("Login Suceessfull");
            setEmail('');
            setPassword('');
        }
    };

    
    return(
        <>
            <form onSubmit={handleSubmit}
            style={{margin:'2rem auto'}}>

            <div>
                <label >Email:</label>
                <input type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                style={{width:'100%',padding:"8px"}}/>
                {emailerror && <p style={{color:'red'}}>{emailerror}</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                style={{width:'100%',padding:'8px'}}/>
                {passworderror && <p style={{color:'red'}}>passworderror</p>}
            </div>

            <button type="submit" style={{marginTop:'1.5rem',padding:'8px 16px'}}>Submit</button>
            </form>
        </>
    )
}