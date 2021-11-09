import { useGoats } from "./GoatProvider.js"
import { Goat } from "./GoatCard.js"

const contentTarget = document.querySelector(".print-list")
  
export const GoatList = () => {

  let allTheGoats = useGoats();

  let goatHTML = "";

  allTheGoats.forEach((singleGoat) => {
    goatHTML += Goat(singleGoat);
  });

  contentTarget.innerHTML = `
    <h2>Goats</h2>
    ${goatHTML}
    `;
};

document.querySelector("#goat-nav-link").addEventListener("click", () => {
  GoatList()
})
