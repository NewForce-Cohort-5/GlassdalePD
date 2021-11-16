// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "suspect": "Este's husband",
import { NoteEditForm } from "./NoteEditForm.js"


export const Note = (note, criminal) => {
    return `
        <div id="card--${note.id}" class="col-sm-3 border border-dark m-3 list-group-item w-75">
        <h3>Suspect: ${criminal.name}</h3>
        <p>Note Text: ${note.noteText}</p>
        <p>Date: ${new Date(note.dateOfNote).toLocaleDateString('en-US')}</p>
        <button id="edit--${note.id}">Edit</button>

        </div>

    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("edit--")){
    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
    }
})


// weird date error something about doesn't conform:
// The specified value "undefined" does not conform to the required format, "yyyy-MM-dd".