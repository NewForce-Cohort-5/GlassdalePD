import {useNotes, updateNote} from "./NoteProvider.js"
import {NoteList} from "./NoteList.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.

// was .noteFormContainer
const contentTarget = document.querySelector(".print-list")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.dateOfNote}" />
        <input type="text" value="${noteWeWantToEdit.noteText}" id="note-text" />
        <input type="text" value="${noteWeWantToEdit.suspect}" id="note-suspect" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}


contentTarget.addEventListener("click", (event) => {
    if(event.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            id: event.target.id.split("-")[1],
            noteText: document.querySelector("#note-text").value,
            suspect: document.querySelector("#note-suspect").value,
            dateOfNote: document.querySelector("#note-date").value
        }

        // Send to json-server and refresh the list
         updateNote(editedNote).then(NoteList)

    }
})
