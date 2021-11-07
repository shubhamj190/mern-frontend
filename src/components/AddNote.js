import React,{useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";
function AddNote() {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({title:"", description:"",tag:""})

  const handleClick = (e)=>{
      e.preventDefault();
    addnote(note.title, note.description, note.tag)
  }

  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }   
  return (
    <div>
      <div className="container" style={{ marginTop: "2rem" }}>
        <h2 className="my-2">Add a note</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              onChange={onchange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription"
              onChange={onchange}
              name="description"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputTag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTag"
              onChange={onchange}
              name="tag"
            />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
