import { Criminal } from "./CriminalCard.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";

const contentTarget = document.querySelector(".criminal-list")

export const CriminalList = () => {
  getCriminals()
  .then(() => {

    let allTheCriminals = useCriminals();

    let criminalHTML = "";

    allTheCriminals.forEach((singleCriminal) => {

        criminalHTML += Criminal(singleCriminal);

    });

    contentTarget.innerHTML = criminalHTML

  });
};