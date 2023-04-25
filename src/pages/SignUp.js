import React, { useContext, useEffect } from 'react'
import '../static/css/home.min.css'
import { useNavigate } from 'react-router-dom'
import AuthContex from '../contex/AuthContex'

function SignUp() {


    const {user} = useContext(AuthContex)
    const navigate = useNavigate()
    
    const createUser = async(e)=>{
        e.preventDefault()
        const username = e.target.username.value
        // console.log(username)
        const password = e.target[1].value
        const response = await fetch('/api/create/',{
            'method':"POST",
            'headers': {
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({'username':username,"password":password})
        })
        const data = await response.json()
        if(data === 'sucess'){
            alert('User Created')
            navigate('/')
        }
        else{
            alert("INVALID Username/Password")
        }
        
    }

    

  useEffect(()=>{
    if(user !== null){
      navigate('/note')
    }
  },[])

  return (
    <div className='home'>
      <h1>Create your account</h1>
      <form className='login-form' onSubmit={createUser} method='post'>
        <input name='username' type="text"  className='form-control' placeholder='Enter Username' required/>
        <input name='password' type="password" className='form-control' placeholder='Enter Password' required/>
        <div>
          <button className="btn btn-primary" type='submit' id='submit'>Create</button>
        </div>
      </form>

    </div>
  )
}

export default SignUp
