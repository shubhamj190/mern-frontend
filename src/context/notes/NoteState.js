import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  
  const initialNotes=[
    {
      "_id": "6186c50f5d6b3f943705580f",
      "user": "6186aec8c38e6a3bae521eef",
      "title": "this is a titile2",
      "description": "this is a description2",
      "tag": "this is a tag2 ",
      "timestamp": "2021-11-06T18:10:23.295Z",
      "__v": 0
    },
    {
      "_id": "6186cd039c71b1e73851b5bd",
      "user": "6186aec8c38e6a3bae521eef",
      "title": "this is a titile3",
      "description": "this is a description3",
      "tag": "this is a tag3 ",
      "timestamp": "2021-11-06T18:44:19.091Z",
      "__v": 0
    },
    {
      "_id": "6186cd0c9c71b1e73851b5bf",
      "user": "6186aec8c38e6a3bae521eef",
      "title": "this is a titile4",
      "description": "this is a description4",
      "tag": "this is a tag4 ",
      "timestamp": "2021-11-06T18:44:28.767Z",
      "__v": 0
    },
    {
      "_id": "6186cd0c9c71b1e73851b5bf",
      "user": "6186aec8c38e6a3bae521eef",
      "title": "this is a titile4",
      "description": "this is a description4",
      "tag": "this is a tag4 ",
      "timestamp": "2021-11-06T18:44:28.767Z",
      "__v": 0
    },
  ]

  const [notes, setNotes] = useState(initialNotes)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
