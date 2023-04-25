import React, { useContext, useEffect, useState } from 'react'
import '../static/css/home.min.css'
import AuthContex from '../contex/AuthContex'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const {loginUser,user} = useContext(AuthContex)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user !== null){
      navigate('/note')
    }
  },[])
  
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
