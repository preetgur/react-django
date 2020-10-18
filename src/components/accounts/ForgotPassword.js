import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import "./ForgotPassword.css"

function ForgotPassword() {
    const history = useHistory();
    const emailRef = useRef()
    // const passwordRef = useRef()
   
  
    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    const [loading,setLoading] = useState(false);


    // use destructuring useAuth
    const {resetPassword,currentUser} = useAuth()


    useEffect(() => {
        emailRef.current.focus()
        
    }, [])

    const handleSubmit = async (e) =>
    {
        e.preventDefault()


        try {
            setMessage("")
            setError('')
            setLoading(true)

            // await login(emailRef.current.value,passwordRef.current.value)
            await resetPassword(emailRef.current.value)
            setMessage("Check Your inbox for further instruction")
            

        }
         catch (e) {

            setError(e.message) // get from firebase

        }

        setLoading(false)
    }


    return (
        <div className="login">
        <form onSubmit={handleSubmit}>
        <div className="dashboard_container">
            
            <div className="dashboard__logo">
              
            <Link to="/">
                 ReactDjango

                </Link>

            </div>

            { error && <p className="signup__error"> {error}</p>}
            { message && <p className="signup__error"> {message}</p>}


            <input type="text" placeholder=" email" ref={emailRef}  />
         


            {/* <input type="password" placeholder="Password" ref={passwordRef} /> */}

            <button disabled={loading} type="submit">Reset Password</button>

            <div className="dashboard__login">
            
            <p>Try ?</p>
            <Link to="/login"> 
                Login
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

export default ForgotPassword
