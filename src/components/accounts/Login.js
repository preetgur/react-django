import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import {auth} from "../firebase"

const Login = () => {
    
    const history = useHistory();
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState(null);

    const signIn = (e) =>
    {
        e.preventDefault();
        // firebase stuff
        auth.signInWithEmailAndPassword(email,password).then( (auth)=> {
            // it successfuly created a new user with email and password
            console.log(auth);
            if(auth)
            {   
                // redirect to homepage
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    const register = (e) =>
    {
        e.preventDefault();
        // firebase stuff

        auth.createUserWithEmailAndPassword(email,password).then( (auth)=> {
            // it successfuly created a new user with email and password
            console.log(auth);
            if(auth)
            {   
                // redirect to homepage
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
        <form>
        <div className="login_container">
            
            <div className="login__logo">
              
            <Link to="/">
                 ReactDjango

                </Link>

            </div>
            
            <input type="text" placeholder=" email" value= {email} onChange={ (e) => { setEmail(e.target.value)
            console.log(email) }} />
         


            <input type="password" placeholder="Password" value= {password} onChange={ (e) => setPassword(e.target.value)} />

            <button >Log In</button>

            <div className="login__forgotPassword">
            
            <h3>  Log in with Facebook</h3>
            <small>Forgot password?</small>
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