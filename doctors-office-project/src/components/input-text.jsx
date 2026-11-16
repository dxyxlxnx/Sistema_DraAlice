import {useState} from 'react'
import '../styles/input-text.css'

function InputText({type, title, variant = "primary", placeholder = "Example Text"}){
    return(
        <>
            <h1 className={variant}>{title}</h1>
            <input className={variant} type={type} placeholder={placeholder} />
        </>
    )
}

export default InputText;