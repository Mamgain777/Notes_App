import React, { useContext, useState } from 'react'
import '../static/css/home.min.css'
import AuthContex from '../contex/AuthContex'

function HomePage() {

  const contex = useContext(AuthContex)
  
  return (
    <div className='home'>
      <h1>Log into your account</h1>
      <form className='login-form' onSubmit={contex.loginUser}>
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
