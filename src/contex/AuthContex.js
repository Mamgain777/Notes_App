import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { redirect, useNavigate } from "react-router-dom";


const AuthContex = createContext()

export default AuthContex

export const ContexProvider = ({children,...rest})=>{
    // console.log(children)

    let [user,setUser] = useState(()=>localStorage.getItem('authToken')?JSON.parse(localStorage.getItem('authToken')):null)
    let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken')?jwt_decode(JSON.parse(localStorage.getItem('authToken')).access):null)
    let navigate = useNavigate()

    let loginUser = async (e)=>{
        e.preventDefault()
        // console.log("Running")
        // console.log(e.target.username.value)
        // console.log(e.target.password.value)

        const response = await fetch('/api/token/',{
            'method':"POST",
            'headers': {
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({'username':e.target.username.value,"password":e.target.password.value})

        })
        if(response.status === 200 ){
            const data = await response.json()
        // console.log(data.access)
        
        setUser(jwt_decode(data.access))
        // console.log(jwt_decode(data.access))
        setAuthToken(data)
        localStorage.setItem('authToken',JSON.stringify(data))
        navigate('/note')
        }
        else{
            alert("Something Went Wrong")
        }
        
    }

    const logoutUser = ()=>{
        localStorage.removeItem('authToken')
        setUser(null)
        setAuthToken(null)
        navigate('/')
    }
    
    const contexData = {
        user:user,
        authToken:authToken,
        setAuthToken:setAuthToken,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }
    
    return(
        <AuthContex.Provider value={contexData}>
            {children}
        </AuthContex.Provider>
    )
}