import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            
            <div className="header__logo">
            ReactDjango
            </div>
            

            <div className="header__options">
                <div className="optionLogin">Login</div>
                <div className="optionSignup">
                    SignUp
                </div>
            </div>
        </div>
    )
}

export default Header
