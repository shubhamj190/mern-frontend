import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

function Note(props) {
  const {showAlert} =props
  const context = useContext(noteContext);
  const { notes, fetchallnotes, getsinglenote, updateanote } = context;

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" });
  const history=useHistory()
  useEffect(() => {
    if(localStorage.getItem('token')){

      fetchallnotes();
    
    // eslint-disable-next-line
    }else{
      history.push('/login')
    }
    
  }, [updateanote]);
  const ref = useRef(null);
  const refClose = useRef(null);

  const updatenote = (currentNote) => {
    ref.current.click();
    const notedetails = getsinglenote(currentNote);

    notedetails
      .then((result) => {
        setNote({
          id:result._id,
          etitle: result.title,
          edescription: result.description,
          etag: result.tag,
          
          
        })
        
      })
      
      
  };

  const handleClick = (e) => {
    updateanote({id:note.id, title:note.etitle, description:note.edescription, tag:note.etag })
    refClose.current.click();
    props.showAlert("Note update successfully", "success")
    e.preventDefault();
    // addnote(note.title, note.description, note.tag)
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
        ref={ref}
      ></button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={refClose}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      onChange={onchange}
                      name="etitle"
                      value={note.etitle}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      onChange={onchange}
                      name="edescription"
                      value={note.edescription}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      onChange={onchange}
                      name="etag"
                      value={note.etag}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={handleClick}
                    disabled={note.etitle.length<5 ||note.edescription<5 ||note.etag<3}
                  >
                   <b>Update Note</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container my-1">
        {notes.length===0 ?"There are no notes to display": ""}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updatenote={updatenote} showAlert={props.showAlert} />
          );
        })}
      </div>
    </>
  );
}

export default Note;
