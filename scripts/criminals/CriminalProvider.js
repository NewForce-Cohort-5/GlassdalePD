let criminalsArray = []

export const useCriminals = () => {
    return criminalsArray.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(dirtyCriminals => dirtyCriminals.json())
        .then(
            cleanCriminals => {
                console.table(cleanCriminals)
                criminalsArray = cleanCriminals
            }
        )
}