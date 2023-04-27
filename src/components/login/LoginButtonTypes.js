import "./LoginButtonTypes.css";
import React from 'react'
// import {  onAuthStateChanged } from 'firebase/auth'
import Background from "./icon-background.png";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
 import auth from "../authentication/firebaseConfig";


const LoginButtonTypes = ({ type, icon }) => {

  // const [currentUser, setCurrentUser] = useState(null)

  
  
  const handleGoogleSignIn = (e) => {
    e.preventDefault()
    const googleSignIn = signInWithPopup(auth, new GoogleAuthProvider(auth))
    return ()=>{
      
      googleSignIn()
    }
  }
  
  // useEffect(() => {
  //   console.log('auth', auth)
  //    onAuthStateChanged(auth, (user) => {
  //     user ? setCurrentUser(user) : setCurrentUser(null)
  //   })
  // },[])

  return (
  
       <div className="login-model-container">
      <img src={Background} alt="" className="styled-border" />
      <img src={icon} alt="" className="login-model-icons" />
      <div className="login-model-btn-container">
        <button className="login-model-btn" onClick={handleGoogleSignIn}>
          Continue with {type}{" "}
          {type !== "Apple" && type !== "FaceBook" ? "Account" : ""}
        </button>
      </div>
    </div>

  );
};

export default LoginButtonTypes;
