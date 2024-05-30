import { useState } from "react";

export default function Changecolor()
{
    const [mystyle,setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const colorchanger=()=>{
        if(mystyle.color==='white')
            {
                setmystyle({color:'black',backgroundColor:'antiquewhite'});
                document.body.style.backgroundColor='white';
            }
        else
        {
            setmystyle({color:'white',backgroundColor:'black'});
            document.body.style.backgroundColor='grey';
        }
    }
    return {mystyle,colorchanger}
}