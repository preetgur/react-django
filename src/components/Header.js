import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            
            <div className="header__logo">
            ReactDjango
            </div>
            

            <div className="header__options">
                <div className="optionLogin">
                    <Link to="/login">
                        Login
                    </Link>
                </div>
                
                <div className="optionSignup">
                    <Link to="/signup">
                        SignUp
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
