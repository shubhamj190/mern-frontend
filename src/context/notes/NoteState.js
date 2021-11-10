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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZhZWM4YzM4ZTZhM2JhZTUyMWVlZiIsImlhdCI6MTYzNjIxOTUwM30.GU-94yehYPXyUCX4UVHPstgGVzIIGJqSygLhthAxsEc",
      },
      body: JSON.stringify({title, description, tag}),
    });

    // logic to add note
    const note = {
      _id: "6186cd0c9c71b1e73851b5bf1",
      user: "6186aec8c38e6a3bae521eef1",
      title: title,
      description: description,
      tag: tag,
      timestamp: "2021-11-06T18:44:28.767Z",
      __v: 0,
    };
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZhZWM4YzM4ZTZhM2JhZTUyMWVlZiIsImlhdCI6MTYzNjIxOTUwM30.GU-94yehYPXyUCX4UVHPstgGVzIIGJqSygLhthAxsEc",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZhZWM4YzM4ZTZhM2JhZTUyMWVlZiIsImlhdCI6MTYzNjIxOTUwM30.GU-94yehYPXyUCX4UVHPstgGVzIIGJqSygLhthAxsEc",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZhZWM4YzM4ZTZhM2JhZTUyMWVlZiIsImlhdCI6MTYzNjIxOTUwM30.GU-94yehYPXyUCX4UVHPstgGVzIIGJqSygLhthAxsEc",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZhZWM4YzM4ZTZhM2JhZTUyMWVlZiIsImlhdCI6MTYzNjIxOTUwM30.GU-94yehYPXyUCX4UVHPstgGVzIIGJqSygLhthAxsEc",
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
