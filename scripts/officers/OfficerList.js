import { Officer } from "./OfficerCard.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".print-list")

export const OfficerList = () => {
  getOfficers()
  .then(() => {

    let allTheCriminals = useOfficers();

    let officerHTML = "";

    allTheCriminals.forEach((singleOfficer) => {

      officerHTML += Officer(singleOfficer);

    });

    contentTarget.innerHTML = `
    <h2>Officers</h2>
    ${officerHTML}
    `

  });
};

document.querySelector("#officers-nav-link").addEventListener("click", () => {
  OfficerList()
})
