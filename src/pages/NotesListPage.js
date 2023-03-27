import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import Listitem from '../components/Listitem'

function NotesListPage() {
    console.log("Note List Page is running")

    const [notes, setNotes] = useState([])

    async function setData(){
      const response = await fetch("/api/notes")
      const data = await response.json()
      setNotes(data)
    }
    
    useEffect(()=>{
      setData()
    },[])
    
  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className='notes-title'>&#9782; NOTES</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
          {notes?.map((note,key)=>{
              return <Listitem key={key} note={note} />
          })}
      </div>
      
      <AddButton />
    </div>
  )
}

export default NotesListPage
