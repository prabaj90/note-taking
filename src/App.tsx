import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';
import { addNote } from './Action';
import './App.css';


function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  )
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  }
  return (
    <div className="App">
      Note Taking App
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul className="listStyle">
        {notes.map((note) => { return <li key={note}>{note}</li> })}
      </ul>
    </div>
  );
}

export default App;
