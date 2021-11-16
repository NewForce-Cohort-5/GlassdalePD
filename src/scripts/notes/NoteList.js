import { getNotes, useNotes } from "./NoteProvider.js"
import { Note } from "./NoteCard.js"
import {NoteForm} from "./NoteForm.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".print-list")

export const NoteList = () => {
  getNotes()
  .then(getCriminals)
  .then(() => {

    let allTheNotes = useNotes();
    let criminals = useCriminals()

    let noteHTML = "";

    allTheNotes.forEach((singleNote) => {
      let singleCriminal = criminals.find(x => singleNote.criminalId === x.id)
        noteHTML += Note(singleNote, singleCriminal);
    });

    contentTarget.innerHTML = `
    ${NoteForm(criminals)}
    <h2>Notes</h2>
    <article class="flexed-container">
    ${noteHTML}
    </article>
    `

  });
};

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteList()
})