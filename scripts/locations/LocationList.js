import { Location } from "./LocationCard.js";
import { useLocations, getLocations } from "./LocationProvider.js";

const contentTarget = document.querySelector(".location-list")

export const LocationList = () => {
  getLocations()
  .then(() => {

    let allTheLocations = useLocations();

    let locationHTML = "";

    allTheLocations.forEach((singleLocation) => {

        locationHTML += Location(singleLocation);

    });

    contentTarget.innerHTML = locationHTML

  });
};