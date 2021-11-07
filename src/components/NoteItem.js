import React from "react";
import Note from "./Note";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card text-white  bg-secondary mb-3 ">
        <div className="card-header">{note.tag}</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="row m-3">
          <i class="far fa-trash-alt col-1"></i>
          <i class="fas fa-edit col-1"></i>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
