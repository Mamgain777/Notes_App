import React from 'react'
import { Link } from 'react-router-dom'

function setTitle(data){
  const title = data.split('\n')[0]
  return title.slice(0,45)
}

function Listitem({note}) {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h4>{setTitle(note.body)}</h4>
        <p>Created On:&ensp;{note.created_date}</p>
        <p>Last Updated:&ensp;{note.updated_date}</p>
      </div>
    </Link>
  )
}

export default Listitem
