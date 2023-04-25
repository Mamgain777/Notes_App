import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { redirect, useNavigate } from "react-router-dom";


const AuthContex = createContext()

export default AuthContex

export const ContexProvider = ({children,...rest})=>{
    // console.log(children)

    let [user,setUser] = useState(()=>localStorage.getItem('authToken')?jwt_decode(JSON.parse(localStorage.getItem('authToken')).access):null)
    let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken')?JSON.parse(localStorage.getItem('authToken')):null)
    let navigate = useNavigate()
    let [loading,setLoading] = useState(true)

    let loginUser = async (e)=>{
        e.preventDefault()
        // console.log("Running")
        console.log(e.target.username.value)
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

    const updateToken = async ()=>{
        console.log("Update Token Called")
        console.log(authToken.refresh)
        const response = await fetch('/api/token/refresh/',{
            'method':"POST",
            'headers': {
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({"refresh":authToken?.refresh})

        })
        const data = await response.json()
        if(response.status === 200 ){
            console.log(data)
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken',JSON.stringify(data))
        }
        else{
            logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    useEffect(()=>{
        
        // if(loading){
        //     updateToken()
        // }
        
        let fourMinutes = 1000 * 60 * 4
        
        let interval = setInterval(()=>{
                if(authToken){
                console.log("Running")
                    updateToken()
            }
        },fourMinutes)

        return ()=>clearInterval(interval)
            
        },[authToken,loading])
    
    const contexData = {
        user:user,
        authToken:authToken,
        loading:loading,
        setAuthToken:setAuthToken,
        setUser:setUser,
        loginUser:loginUser,
        logoutUser:logoutUser,
        updateToken:updateToken,
        setLoading:setLoading
    }

    
    
    return(
        <AuthContex.Provider value={contexData}>
            {children}
        </AuthContex.Provider>
    )
}