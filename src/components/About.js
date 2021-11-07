import React, {useContext, useEffect} from 'react'
import NoteState from '../context/notes/noteContext'

export default function About() {
  const a = useContext(NoteState)

  useEffect(() => {
    a.updateState();
    // eslint-disable-next-line
  }, [])

    return (
        <div>
          <h1>this is a about component</h1>  
          this is about {a.state.name} and he is in {a.state.company}
        </div>
    )
}
