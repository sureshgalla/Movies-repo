import React from 'react'
import Background from "./icon-background.png";
import "./LoginButtonTypes.css";


function LoginPage({handleGoogleSignIn, type, icon}) {
  return (
    <div>
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
    </div>
  )
}

export default LoginPage
