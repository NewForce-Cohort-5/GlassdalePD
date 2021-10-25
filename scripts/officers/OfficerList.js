import { Officer } from "./OfficerCard.js";
import { getOfficers, useOfficers } from "./OfficerProvider.js";

const contentTarget = document.querySelector(".officer-list")

export const OfficerList = () => {
  getOfficers()
  .then(() => {

    let allTheCriminals = useOfficers();

    let officerHTML = "";

    allTheCriminals.forEach((singleOfficer) => {

      officerHTML += Officer(singleOfficer);

    });

    contentTarget.innerHTML = officerHTML

  });
};