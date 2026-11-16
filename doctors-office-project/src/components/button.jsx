import { useState} from "react";
import '../styles/button.css'

function Button({text, variant = "primary"}){

    return(
        <button className={variant}>{text}</button>
    )
}

export default Button;