import React, { useEffect, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import { useAuth } from "./AuthProvider"

const Login = () => {
    
    const history = useHistory();
    const emailRef = useRef()
    const passwordRef = useRef()
   
  
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);


    // use destructuring useAuth
    const {login,currentUser} = useAuth()

    const focus = () =>
    {
        emailRef.current.focus()
    }

    useEffect(() => {
        emailRef.current.focus()
        
    }, [])

    const handleSubmit = async (e) =>
    {
        e.preventDefault()


        try {
            setError('')
            setLoading(true)

            await login(emailRef.current.value,passwordRef.current.value)
            
            history.push('/')

        }
         catch (e) {

            setError(e.message) // get from firebase

        }

        setLoading(false)
    }


    return (
        <div className="login">
        <form onSubmit={handleSubmit}>
        <div className="login_container">
            
            <div className="login__logo">
              
            <Link to="/">
                 ReactDjango

                </Link>

            </div>

            { error && <p className="signup__error"> {error}</p>}

            <input type="text" placeholder=" email" ref={emailRef} />
         


            <input type="password" placeholder="Password" ref={passwordRef} />

            <button disabled={loading} type="submit">Log In</button>

            <div className="login__forgotPassword">
            
            <h3>  Log in with Facebook</h3>
            <Link to="/forgot-password"> 
            <small>Forgot password?</small>
            </Link>
             </div>
            
        </div>

      

        <div className="signup_container2">
            <h3>Don't have an account?</h3> <span>
            <Link to="signup">
                 SignUp

                </Link>
            </span>
        </div>

        </form>
        </div>
    )
}




export default Login