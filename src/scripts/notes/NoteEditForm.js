import {useNotes, updateNote} from "./NoteProvider.js"
import {NoteList} from "./NoteList.js"
import { useCriminals } from "../criminals/CriminalProvider.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.

// was .noteFormContainer


export const NoteEditForm = (noteId) => {
    const contentTarget = document.querySelector(`#card--${noteId}`)
    // Give this component access to our application's notes state
    const allNotes = useNotes();
    const criminalsArray = useCriminals()

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <div class="col-sm-3 border border-dark m-3 list-group-item w-50">
        <select id="criminalEdit-FK" class="form-control criminalSelect">
            <option value="0">Please select a Criminal</option>
             ${criminalsArray.map(taco => taco.id === noteWeWantToEdit.criminalId ? `<option selected value="${ taco.id }">${ taco.name }</option>`: `<option value="${ taco.id }">${ taco.name }</option>` )}
        </select>
        <input class="form-control" type="date" id="edit-date" value="${noteWeWantToEdit.dateOfNote}" />
        <input class="form-control" placeholder="leave a note ..." type="text" value="${noteWeWantToEdit.noteText}" id="edit-text" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
        </div>
    `



contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            id: event.target.id.split("-")[1],
            noteText: document.querySelector("#edit-text").value,
            criminalId: +document.querySelector("#criminalEdit-FK").value,
            dateOfNote: document.querySelector("#edit-date").value
        }
            console.log(editedNote)
        // Send to json-server and refresh the list
          updateNote(editedNote).then(NoteList)

    }
})
}