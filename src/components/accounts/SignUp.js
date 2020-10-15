import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"

function SignUp() {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState(null);

    return (
        
        <div className="signup">

        <form>
        <div className="signup_container">
            
            <div className="signup__logo">
                <Link to="/">
                 ReactDjango

                </Link>
            </div>
            
            <input type="text" placeholder=" email" value= {email} onChange={ (e) => { setEmail(e.target.value)
            console.log(email) }} />
         

            <input type="password" placeholder="Password" value= {password} onChange={ (e) => setPassword(e.target.value)} />

            <input type="password" placeholder="Confirm Password" value= {password} onChange={ (e) => setPassword(e.target.value)} />

            <button >Sign Up</button>

           
        </div>

        <div className="signup_container2">
            <h3>Already have an account?</h3> <span>
            <Link to="login">
                 Login

                </Link>
            </span>
        </div>
        </form>

        </div>        
    )
}

export default SignUp
