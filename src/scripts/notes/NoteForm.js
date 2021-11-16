import { saveNote } from "./NoteProvider.js"
import { NoteList } from "./NoteList.js"

const contentTarget = document.querySelector(".print-list")

// Handle browser-generated click event in component
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

// "id": 1,
// "noteText": "Este's a friend of mine",
// "dateOfNote": "10/25/2021",
// "criminalId": 4,

        // Make a new object representation of a note
        const newNote = {
            noteText: document.querySelector("#note-text").value,
            dateOfNote: document.querySelector("#date-text").value,
            criminalId: +document.querySelector("#criminal-FK").value
            // Key/value pairs here
        }
        console.log(newNote)
        document.querySelector("#note-text").value = ""
        document.querySelector("#date-text").value = ""
        document.querySelector("#criminal-FK").value = 0;
        // Change API state and application state
         saveNote(newNote)
         .then(NoteList) // Refresh your list of notes once you've saved your new one
    }
})
{/* <select id="noteForm--criminal" class="criminalSelect">
    <option value="${ criminal.id }">${ criminal.name }</option>
</select> */}
//Put some input fields and prompts here
export const NoteForm = (criminalsArray) => {
    return `
    <section id="note-form-container">
    <div class="col-sm-3 border border-dark m-3 list-group-item w-50">
        <select id="criminal-FK" class="form-control criminalSelect">
            <option value="0">Please select a Criminal</option>
            ${criminalsArray.map(taco => `<option value="${ taco.id }">${ taco.name }</option>` )}
        </select>
        <input class="form-control" type="textarea" id="note-text" placeholder="Note goes here">
        <input class="form-control" type="date" id="date-text">
        <button id="saveNote">Save Note</button>
        </div>
        </section>
    `
}
{/* <input class="form-control" type="text" id="suspect-text" placeholder="Suspect Name goes here"> */}


