import { createContext, useState } from "react";

const AuthContex = createContext()

export default AuthContex

export const ContexProvider = ({children,...rest})=>{
    // console.log(children)

    let [user,setUser] = useState(null)
    let [authToken, setAuthToken] = useState(null)

    let loginUser = async (e)=>{
        e.preventDefault()
        console.log("Running")
        console.log(e.target.username.value)
        console.log(e.target.password.value)

        const response = await fetch('/api/token/',{
            'method':"POST",
            'headers': {
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({'username':e.target.username.value,"password":e.target.password.value})

        })

        const data = await response.json()
        console.log(data)
    }
    
    const contexData = {
        loginUser:loginUser,
    }
    
    return(
        <AuthContex.Provider value={contexData}>
            {children}
        </AuthContex.Provider>
    )
}