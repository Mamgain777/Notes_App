import React, { useContext } from 'react'
import AuthContex, { ContexProvider } from '../contex/AuthContex'
import { Link } from 'react-router-dom'

function Header() {

  
  const {user,logoutUser} = useContext(AuthContex)
  return (
    <div className='app-header'>
     {user? <>
     <h1>Hii!{user.username} </h1>
     <button onClick={logoutUser}>Logout</button>
     </>
     : <h1>VOICE NOTES</h1>}
    </div>
  )
}

export default Header

