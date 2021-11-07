import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

function Home() {
  return (
    <>
     <AddNote/>
      <h2 className="my-3">Your Notes</h2>
      <Note />
    </>
  );
}

export default Home;
