import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://127.0.0.1:5000";

  const [notes, setNotes] = useState([]);
// <------------------------------------------------------------------------------------------------------------------------->
  // Add a note

  const addnote = async (title, description, tag) => {
    //:API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag}),
    });

    const note= await response.json()
    // logic to add note
    setNotes(notes.concat(note));
  };
// <------------------------------------------------------------------------------------------------------------------------->
  // Delete a note

  const deletenote = async(id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

    });
    const json=response.json()

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
// <------------------------------------------------------------------------------------------------------------------------->
  // Delete a note

  const updateanote = async ({id, title, description, tag}) => {
    // api call for update the note

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({title:title, description:description, tag:tag}),
    });
    const json= await response.json()

    let newNotes = JSON.parse(JSON.stringify(notes))

    // update the note logic
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  };
// <------------------------------------------------------------------------------------------------------------------------->
  // fetch all notes

  const fetchallnotes =async ()=>{
    // api call for update the note
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json= await response.json()
    setNotes(json)
  }


  // <------------------------------------------------------------------------------------------------------------------------->
  // fetch single note

  const getsinglenote =async (id)=>{
    // api call for update the note
    const response = await fetch(`${host}/api/notes/getsinglenote/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    })
    return response.json()
  }

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addnote, deletenote, updateanote, fetchallnotes, getsinglenote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
