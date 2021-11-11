import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

function NoteItem(props) {
  const{showAlert}=props
  const { note, updatenote } = props;
  const context = useContext(noteContext)
  const {deletenote} =context

  return (
    <div className="col-md-4">
      <div className="card text-white  bg-secondary mb-3 ">
        <div className="card-header">{note.tag}</div>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="row m-3">
          <i className="far fa-trash-alt col-1" onClick={()=>{deletenote(note._id); showAlert('Note deleted successfully',"success")}}></i>
          <i className="fas fa-edit col-1" onClick={()=>{updatenote(note._id)}}></i>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
