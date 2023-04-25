import React, { useContext, useEffect, useState } from 'react'
import '../static/css/home.min.css'
import AuthContex from '../contex/AuthContex'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const {loginUser} = useContext(AuthContex)
  const navigate = useNavigate()

//   const loginUser = async (e)=>{
//     e.preventDefault()
//     // console.log("Running")
//     // console.log(e.target.username.value)
//     // console.log(e.target.password.value)

//     const response = await fetch('/api/token/',{
//         'method':"POST",
//         'headers': {
//             'Content-Type':'application/json'
//         },
//         'body':JSON.stringify({'username':e.target.username.value,"password":e.target.password.value})

//     })
//     if(response.status === 200 ){
//         const data = await response.json()
//     // console.log(data.access)
//     setUser(jwt_decode(data.access))
//     // console.log(jwt_decode(data.access))
//     setAuthToken(data)
//     localStorage.setItem('authToken',JSON.stringify(data))
//     navigate('/note')
    
//     }
//     else{
//         alert("Something Went Wrong")
//     }
    
// }
  
  return (
    <div className='home'>
      <h1>Log into your account</h1>
      <form className='login-form' onSubmit={loginUser} method='post'>
        <input name='username' type="text"  className='form-control' placeholder='Enter Username' required/>
        <input name='password' type="password" className='form-control' placeholder='Enter Password' required/>
        <div>
          <button className="btn btn-primary" type='submit' id='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default HomePage
