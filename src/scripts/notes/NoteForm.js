import { saveNote } from "./NoteProvider.js"
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".note-form")

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "suspect": "Este's husband",

        // Make a new object representation of a note
        const newNote = {
            noteText: document.querySelector("#note-text").value,
            dateOfNote: document.querySelector("#date-text").value,
            suspect: document.querySelector("#suspect-text").value
            // Key/value pairs here
        }
        console.log(newNote)
        document.querySelector("#note-text").value = ""
        document.querySelector("#date-text").value = ""
        document.querySelector("#suspect-text").value = ""
        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})

//Put some input fields and prompts here
export const NoteForm = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text" placeholder="Note goes here">
        <input type="date" id="date-text">
        <input type="text" id="suspect-text" placeholder="Suspect Name goes here">
        <button id="saveNote">Save Note</button>
    `
}
