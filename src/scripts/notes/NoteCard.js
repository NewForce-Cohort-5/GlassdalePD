// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "suspect": "Este's husband",
import { NoteEditForm } from "./NoteEditForm.js"


export const Note = (Object) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>Suspect: ${Object.suspect}</h3>
        <p>Note Text: ${Object.noteText}</p>
        <p>Date: ${new Date(Object.dateOfNote).toLocaleDateString('en-US')}</p>
        <button id="edit--${Object.id}">Edit</button>

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