import { useState } from 'react'
import Button from '../components/button.jsx';
import InputText from '../components/input-text.jsx';
import Logo from '../assets/Dra_Alice.png';
import '../styles/LogIn.css'

function LogIn(){
    const[isLogin, setIsLogin] = useState(true);

    return(
        <div className="SignUp-container">
            <img className="logo-wrapper" src={Logo} alt="logo Dra Alice"/>
            
            <div className="text-container">
                <InputText title="Username" placeholder="Enter your username" />
                <InputText title="Password" type="password" placeholder="Enter your password" />
                <Button id="btn-login" text="Log in" />
                <Button text="Sign Up" />
                <Button text="Sign In" />
            </div>
        </div>
    )
}

export default LogIn;