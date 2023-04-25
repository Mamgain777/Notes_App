import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContex from '../contex/AuthContex'

function PrivateRoutes() {

  const {user} = useContext(AuthContex)
  
  return (

    user ? <Outlet />: <Navigate to='/' />
      
  )
}

export default PrivateRoutes
