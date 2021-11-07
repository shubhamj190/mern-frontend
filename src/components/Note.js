import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";

function Note() {
  const context = useContext(noteContext);
  const { notes, setNote } = context;

  return (
    <div className="row">
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
}

export default Note;
