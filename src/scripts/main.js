import { OfficerList } from "./officers/OfficerList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { LocationList } from "./locations/LocationList.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { GoatList } from "./goats/GoatList.js"

// OfficerList()
// CriminalList()
// LocationList()
// NoteForm()

const goatModeButton = document.querySelector("#goat-nav-link")

goatModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("goat-mode")
  })