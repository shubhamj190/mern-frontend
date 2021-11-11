import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function Home(props) {
  const {showAlert} =props
  return (
    <>
     <AddNote showAlert={showAlert}  />
      <h2 className="my-3">Your Notes</h2>
      <Note showAlert={showAlert}  />
    </>
  );
}

export default Home;
