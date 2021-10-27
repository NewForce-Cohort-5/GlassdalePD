export const GoatMode = () => {
    return `
        <div class="col-md-4">
        <button type="button" id="goat-mode-button" class="btn btn-info btn-lg">Goat Mode</button>
        </div>
    `;
}

export const Goat = (goat) => {
    return `
        <div class="col-md-4">
        <img src="${goat.img}" alt="${goat.altGoat}" class="img-fluid img-thumbnail rounded mx-auto d-block">
        </div>
    `;
}