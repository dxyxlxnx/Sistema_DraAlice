import { useState} from "react";
import '../styles/button.css'

function Button({text, variant = "primary", eventClick}){

    return(
        <button onClick={eventClick} className={`btn ${variant}`}>{text}</button>

    )
}

export default Button;