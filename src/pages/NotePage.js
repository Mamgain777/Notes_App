import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams,  useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/left-arrow2.svg'
import AuthContex from '../contex/AuthContex'

function NotePage() {

    const {id} = useParams()
    let navigate = useNavigate()
    const [note, setNote] = useState({})
    const up = false
    const {authToken} = useContext(AuthContex)
    
    const setData = async ()=>{
        const response = await fetch(`/api/notes/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            }
        })
        
        const data = await response.json()
        if(data === "fail"){
            navigate('/note')
        }
        // console.log(data)
        setNote(data)
    }

    async function updateNode(){

        fetch(`/api/notes/${id}`,{
            'method': "PUT",
            'headers': {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            },
            'body':JSON.stringify(note)
        })
    }
    async function createNode(){

        fetch(`/api/notes`,{
            'method': "POST",
            'headers': {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            },
            'body':JSON.stringify(note)
        })
    }
    
    async function deleteNote(){
        fetch(`/api/notes/${id}`,{
            'method': "DELETE",
            'headers': {
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authToken.access)
            },
            // 'body':JSON.stringify({note})
        })
        navigate('/')
    }


   

    function submit(){
        if(id !== 'new' && !note.body){
            deleteNote()
        }
        else if (id !== 'new'){
            updateNode()
        }
        else{
            if(note.body){
                createNode()
            }
        }
         
       navigate('/')
    }
    
    useEffect(()=>{
        if (id !== "new"){
            setData()

        }
    },[])
    
    console.log("Note Page is running")
    return (

        <div className="note">
            <div className='note-header'>
                <h3>
                    <Link to={'/'} onClick={submit}>
                        <ArrowLeft />
                    </Link>
                </h3>
                {id === 'new' ||
                <button onClick={deleteNote}>DELETE</button>                
                }
                
            </div>
            <textarea placeholder="edit note" onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note.body}></textarea>
        </div >
        
    )
}

export default NotePage
