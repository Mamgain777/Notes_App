import React, { useContext } from 'react'
import AuthContex, { ContexProvider } from '../contex/AuthContex'
import { Link } from 'react-router-dom'

function Header() {


  const { user, logoutUser } = useContext(AuthContex)
  return (
    <div className='app-header'>
      {user ? <>
        <h1>Hii!&ensp;{user.username} </h1>
        <button onClick={logoutUser}>Logout</button>
      </>
        :
        <>
          <Link to="/">VOICE NOTES</Link>
          <Link to="/signUp">SignUp</Link>

        </>
      }
    </div>
  )
}

export default Header

