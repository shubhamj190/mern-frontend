import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s1 = {
    name: "shubham",
    company: "ufaber",
  };

  const [state, setState] = useState(s1);

  const updateState = () => {
    setTimeout(() => {
      setState({ name: "sawant", company: "google" });
    }, 2000);
  };

  return (
    <NoteContext.Provider value={({state, updateState})}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
