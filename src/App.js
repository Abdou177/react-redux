import "./App.css";

import AddNoteForm from "./Components/AddNoteForm";
import NotesList from "./Components/NotesList";

export default function App() {
  return (
    <div className="App">
      <div id="app">
        <div style={{ textAlign: "center", fontWeight: 700 }}>
          <h1>NOTES LIST</h1>
        </div>
        <AddNoteForm />
        <NotesList />
      </div>
    </div>
  );
}
