import { ADD_NOTE, DELETE_NOTE } from "../Constants/ActionsTypes";

export const addNote = (payload) => {
  return { type: ADD_NOTE, payload };
};

export const deleteNote = (payload) => {
  return { type: DELETE_NOTE, payload };
};
