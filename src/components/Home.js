import React from "react";
import Note from "./Note";

function Home() {
  return (
    <>
      <div className="container" style={{marginTop:"2rem"}}>
        <h2 className="my-2">Add a note</h2>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h2 className="my-3">Your Notes</h2>
      <Note />
    </>
  );
}

export default Home;
