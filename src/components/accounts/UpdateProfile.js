import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./SignUp.css"
import {useAuth} from "./AuthProvider"
import "./UpdateProfile.css"
function UpdateProfile() {

    const history = useHistory();
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const displayNameRef = useRef()
    const phoneNumberRef = useRef()



    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);


    // use destructuring useAuth
    const {updateEmail,updatePassword,currentUser,updateUsername} = useAuth()

    const handleSubmit = (e) =>
    {
        e.preventDefault()

        if(passwordRef.current.value !== confirmPasswordRef.current.value)
        {
            return setError('Passwords do not match')
        }

        const promises = []
        if(emailRef.current.value !== currentUser.email)
        {
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value)
        {
            promises.push(updatePassword(passwordRef.current.value))
        }

        if(displayNameRef.current.value)
        {
            promises.push(updateUsername(displayNameRef.current.value))
        }

        Promise.all(promises).then( ()=> history.push('/dashboard')).catch( ()=>{
            setError("failed to update email/password/displayName")
        }).finally( ()=> {
            setLoading(false)
        })


        try {
            setError('')
            setLoading(true)

            // await signup(emailRef.current.value,passwordRef.current.value)
            // history.push('/')


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

            <input type="text" ref={emailRef} defaultValue={currentUser.email} />
         
            <input type="text" ref={displayNameRef} defaultValue={currentUser.displayName} placeholder="Change Display Name"  /> 

            <input type="password" ref={passwordRef} placeholder="New Password"/>

            <input type="password" ref={confirmPasswordRef} placeholder="Confirm New Password"  /> 



            <button disabled={loading} type="submit">Update profile</button>

           
        </div>

        <div className="update_container2">
            
            <Link to="/dashboard">
                 Cancel

                </Link>
            
        </div>
        </form>

        </div>        
    )
}

export default UpdateProfile
