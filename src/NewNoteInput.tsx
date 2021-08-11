import React, { useState, ChangeEvent } from 'react'

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState("");
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }
    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }
    return (
        <div>
            <input type="text" placeholder="Enter Note" name="note" value={note} onChange={updateNote} />
            <button onClick={onAddNoteClick}>Add Note </button>
        </div>
    )
};

export default NewNoteInput;
