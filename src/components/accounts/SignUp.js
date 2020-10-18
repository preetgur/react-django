import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./SignUp.css"
import {useAuth} from "./AuthProvider"

function SignUp() {

    const history = useHistory(); 
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);


    // use destructuring useAuth
    const {signup,currentUser} = useAuth()

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value)
        {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)

            await signup(emailRef.current.value,passwordRef.current.value)
            history.push('/')


        }
         catch (e) {

            setError(e.message) // get from firebase

        }

        setLoading(false)
    }

    return (
        
        <div className="signup">

        <form onSubmit={handleSubmit}>
        <div className="signup_container">
            
            <div className="signup__logo">
                <Link to="/">
                 ReactDjango

                </Link>
            </div>
            { error && <p className="signup__error"> {error}</p>}

    {/* { currentUser && <p className="signup__error"> {currentUser.email}</p>} */}

            <input type="text" ref={emailRef} placeholder=" email"  />
         

            <input type="password" ref={passwordRef} placeholder="Password"   />

            <input type="password" ref={confirmPasswordRef} placeholder="Confirm Password"  />

            <button disabled={loading} type="submit">Sign Up</button>

           
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
