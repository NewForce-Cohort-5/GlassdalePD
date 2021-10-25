import { Criminal } from "./CriminalCard.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

const contentTarget = document.querySelector(".print-list")

export const CriminalList = () => {
  getCriminals()
  .then(() => {

    let allTheCriminals = useCriminals();

    let criminalHTML = "";
   
    allTheCriminals.forEach((singleCriminal) => {

        criminalHTML += Criminal(singleCriminal);
    });

    contentTarget.innerHTML = `
    <h2>Criminals</h2>
    ${criminalHTML}`

  });
};

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList()
})