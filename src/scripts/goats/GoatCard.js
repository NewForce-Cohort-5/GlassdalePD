export const Goat = (goat) => {
    return `
        <div class="col-md-4">
        <img src="${goat.img}" alt="${goat.altGoat}" class="img-fluid img-thumbnail rounded mx-auto d-block">
        </div>
    `;
}