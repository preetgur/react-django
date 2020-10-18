import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './accounts/AuthProvider'
import "./Header.css"

function Header() {

    const {currentUser,logout} = useAuth()
    const [error, setError] = useState("")
    const history = useHistory();
    
    async function handleLogout() {
        try {
            setError("")
            await logout()
            history.push('/')

        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className="header">
            
            <div className="header__logo">
            ReactDjango
            </div>
            

            <div className="header__options">

                { currentUser && currentUser.email?<> <div className="optionlogout" onClick={handleLogout}>
             
                Logout
                { error && <p className="signup__error"> {error}</p>}
           
                
            </div>
            
            <div className="optiondashboard">
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </div>
            </> :<> <div className="optionLogin">
                    <Link to="/login">
                        Login
                    </Link>
                </div>

                <div className="optionSignup">
                <Link to="/signup">
                    SignUp
                </Link>
                
            </div> </>
                }
                
                
                
            </div>
        </div>
    )
}

export default Header
