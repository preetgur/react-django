import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './AuthProvider'

// by using you can go to the dashboard through link not with directly put in url

function PrivateRouter({component: Component,...rest}) {

    const {currentUser} = useAuth()
    return (
      
        // rest or props contain : pathname,url,etc
        <Route {...rest} render={props => 
            {
                                
            return currentUser? <Component {...props} />:<Redirect to="/"/>
            }}>

        </Route>
    )
}


function CheckAuthenticationRouter({component: Component,...rest}) {

    const {currentUser} = useAuth()
    return (
      
        // rest or props contain : pathname,url,etc
        <Route {...rest} render={props => 
            {
                                
            return currentUser? <Redirect to="/"/> :<Component {...props} />
            }}>

        </Route>
    )
}

export { PrivateRouter,CheckAuthenticationRouter}   
