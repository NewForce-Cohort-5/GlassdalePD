let notesArray = []

export const useNotes = () => {
    return notesArray.slice()
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(dirtyNotes => dirtyNotes.json())
        .then(cleanNotes => {
            notesArray = cleanNotes
        })

}

export const saveNote = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const updateNote = note => {

    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })

}

