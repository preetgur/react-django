import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import "./Dashboard.css"
import Avatar from '@material-ui/core/Avatar';
import ProfilePicUploader from './ProfilePicUploader';

function Dashboard() {

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
        <div className="dashboard">
            <div className="dashboard__container">

              { error && <p className="image__error"> {error}</p>}


            <div className="dashboard__profile_pic">
            <Avatar alt="xyz" src={currentUser.photoURL} style={{height: 100,
    width: 100}} /> 

                <ProfilePicUploader/>
            </div>
                
            
            

            <div className="dashboard__userDetail">
                <p>Email : {currentUser && currentUser.email}</p>
                <p>Display Name : {currentUser.displayName?currentUser.displayName:"XXXXXX"}</p>
                <p>Last Login : {currentUser?currentUser.metadata.lastSignInTime:"------"}</p>
                <p>Phone Number : {currentUser.phoneNumber?currentUser.phoneNumber:"XXXXXX-XXXXX"}</p>

               

            </div>
            
    
        <div className="dashboard__update_logout">

        <Link to="/update-profile" className="btn">
                    Update Profile
                </Link>

        <Link to="/"className="btn">
            Go Back
            </Link>        
            {/* <button onClick={handleLogout} className="btn">Go Back</button>
             */}
        </div>
            
        </div>
        
        </div>
    )
}
 
export default Dashboard
