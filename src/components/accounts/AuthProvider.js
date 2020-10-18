import { auth } from "../firebase";
import React ,{ createContext, useContext, useEffect, useState} from "react"


 const AuthContext = createContext();

 const useAuth = () => useContext(AuthContext);

 const AuthProvider =({ children}) => {

    const [currentUser,setCurrentUser] = useState()

    // return promise
    const signup = (email,password) => {
        return auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email,password) => {
        return auth.signInWithEmailAndPassword(email,password)
    }

    const logout = ()=>
    {
        return auth.signOut()
    }

    function resetPassword(email)
    {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email)
    {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password)
    {
        return currentUser.updatePassword(password)
    }

    function updateUsername(displayName)
    {
        return currentUser.updateProfile({
            displayName:displayName
        })
    }

    function updateProfileImage(imageUrl)
    {
        
        console.log('image url',imageUrl);
        
        return currentUser.updateProfile({
            photoURL : imageUrl
        })
    }

    // function updatePhoneNubmer(phoneNumber)
    // {
    //     return currentUser.updatePhoneNubmer(phoneNumber:phoneNumber)
    // }

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
        })

        // unscubscribe from the lister 'onAuthstatchanged'
        return unsubscribe
    }, [])
    


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUsername,
        updateProfileImage
    }
    
    console.log(value)

    return(
    <AuthContext.Provider value={value}>

        {children}

    </AuthContext.Provider>
    )

 }



export {AuthContext, AuthProvider, useAuth}