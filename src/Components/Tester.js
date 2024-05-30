import React,{useState} from "react";
import Color from "./ColorChanger";

function Tester()
{
    const { mystyle, colorchanger } = Color();
    return(
        <div style={mystyle}>
            HELLO MEOW
            <button onClick={colorchanger} style={mystyle}></button>
        </div>
    )
}
function TextLoc(props){
    const { mystyle, colorchanger } = Color();
    const [text,nexttext]=useState("");
    const changetoupper=()=>
        {
            console.log("changetoupper");
            nexttext(text.toUpperCase())
        }
    const changer=(event)=>
        {
            console.log("changer");
            nexttext(event.target.value);
        }
    return(
        <div className="TEXT" style={mystyle}>
            <h1>{props.text}</h1>
            <textarea className="textarea" value={text} cols={100} rows={8} onChange={changer}></textarea>
            <button className="touppercasebutton" onClick={changetoupper}>Change to Uppercase</button>
            <button onClick={colorchanger} style={mystyle}></button>
        </div>
    )
}


export default Tester;
export {TextLoc,Color};