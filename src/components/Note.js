import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";

function Note() {
  const context = useContext(noteContext);
  const { notes, setNote, addnote } = context;

  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem key={note._id}note={note} />;
      })}
    </div>
  );
}

export default Note;
