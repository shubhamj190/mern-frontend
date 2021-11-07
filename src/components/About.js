import React, {useContext, useEffect} from 'react'
import NoteState from '../context/notes/noteContext'

export default function About() {
  const a = useContext(NoteState)

    return (
        <div>
          <h1>this is a about component</h1>
        </div>
    )
}
