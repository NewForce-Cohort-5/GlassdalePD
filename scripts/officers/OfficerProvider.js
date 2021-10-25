let officersArray = []

export const useOfficers = () => {
    return officersArray.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(dirtyOfficers => dirtyOfficers.json())
        .then(
            cleanOfficers => {
                console.table(cleanOfficers)
                officersArray = cleanOfficers
            }
        )
}