import { storage } from '../firebase';
import React, { useRef, useState } from 'react'
import { useAuth } from './AuthProvider';
import { useHistory } from 'react-router-dom';


function ProfilePicUploader() {

    const [profile_pic, setProfile_pic] = useState(null)
    const [error,setError] = useState("");
    const [progress, setProgress] = useState(0)
    const [isProgress, setIsProgress] = useState(false)

  
    const { updateProfileImage, currentUser } = useAuth()

    const history = useHistory(); 

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setProfile_pic(e.target.files[0]);

        }
    }

    console.log('Profile state',profile_pic);
    

    const handleFireBaseUpload =  (e) => {

    try {
            e.preventDefault()
            setError("")
            setProgress(0)
            // async magic goes here...

            const uploadTask = storage.ref(`profile_images/${currentUser.email}/${profile_pic.name}`).put(profile_pic)

            uploadTask.on("state_changed", (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot)
                   //progress function ..

            const progress = Math.round((snapShot.bytesTransferred/snapShot.totalBytes) *100 )

            setProgress(progress)
            setIsProgress(true)
            },
                (error) => {
                    // error function..
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    // complete function ...
                    storage
                        .ref("profile_images")
                        .child(currentUser.email)
                        .child(profile_pic.name)
                        .getDownloadURL()
                        .then( async (url) => {

                            // calling the fxn defined in AuthProvider
                            await updateProfileImage(url)
                            setProgress(0)
                            setProfile_pic(null)
                            setIsProgress(false)
                            history.push("/dashboard")
                        })
                }

            )


        }

        catch(e)
        {
            setError("Please choose a file ",e.message)
        }
    }

    return (
        <div>
            { error && <p className="signup__error"> {error}</p>}   
            <form onSubmit={handleFireBaseUpload}>

                <input type="file" onChange={handleChange} />
                <button>Upload</button>
            </form>

           {isProgress && <progress value={progress} max= "100" />  }
        </div>
    )
}

export default ProfilePicUploader
