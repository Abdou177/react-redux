import React from "react";
import { useSelector } from "react-redux";

import Note from "./Note";

const NotesList = () => {
  const notesList = useSelector((state) => state.notesList);

  return (
    <div>
      {notesList.map((list, i) => (
        <Note key={i} list={list} />
      ))}
    </div>
  );
};

export default NotesList;
