import { ADD_NOTE, DELETE_NOTE } from "../Constants/ActionsTypes";

const intialState = {
  notesList: [
    {
      id: 1,
      name: "Martin Curtis",
      company: "Ant Design",
      note:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      id: 2,
      name: "Ali Connors",
      company: "Material UI",
      note:
        "I'll be in your neighborhood doing errands this day… Do you have Paris recommendations? Have you ever. Wish I could come, but I'm out of town this weekend!!"
    }
  ]
};

const notesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        // notesList: state.notesList.concat(action.payload)
        notesList: [...state.notesList, action.payload]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter((note) => note.id !== action.payload)
      };
    default:
      return state;
  }
};

export default notesReducer;
