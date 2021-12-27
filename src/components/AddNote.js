import React,{useContext, useState, useEffect} from "react";
import noteContext from "../context/notes/noteContext";
function AddNote(props) {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({title:"", description:"",tag:""})

  useEffect(() => {
    setNote({title:"", description:"",tag:""})
  }, [setNote])

  const handleClick = (e)=>{
      e.preventDefault();
    addnote(note.title, note.description, note.tag)
    setNote({title:"", description:"",tag:""})
    props.showAlert("Note is added !!",'success')
  }

  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }   
  return (
    <div>
      <div className="container col-md-6 col-sm-12" style={{ marginTop: "2rem" }}>
        <h2 className="my-2">Add a note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Title
            </label> <small style={{"fontSize":"10px"}}>(please put atleast 5 chars)</small>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              onChange={onchange}
              name="title"
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Description
            </label> <small style={{"fontSize":"10px"}}>(please put atleast 5 chars)</small>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription"
              onChange={onchange}
              name="description"
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputTag" className="form-label">
              Tag
            </label> 
            <input
              type="text"
              className="form-control"
              id="exampleInputTag"
              onChange={onchange}
              name="tag"
              value={note.tag}
            />
          </div>
          
          <button type="submit" className="btn btn-light" onClick={handleClick} disabled={note.title.length<5 || note.description<5 || note.tag<3}>
           <b>Add Note</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
