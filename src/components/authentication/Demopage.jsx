// import { signOut } from 'firebase/auth'
import React,{useState,useEffect} from 'react'
import auth from './firebaseConfig'
//import auth from "../authentication/firebaseConfig";
import {  onAuthStateChanged } from 'firebase/auth'
import LoginModel from '../login/LoginModel'
import Home from '../redHome/Home'


function Demopage() {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    console.log('auth', auth)
     onAuthStateChanged(auth, (user) => {
      user ? setCurrentUser(user) : setCurrentUser(null)
    })
  },[])
  return (
    <center>
      {currentUser ?  <Home/>: <LoginModel/>}
       
    </center>
  )
}

export default Demopage
