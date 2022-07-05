import { guestsHTML } from "./Guests.js";
import { locationsHTML } from "./Locations.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
        ${locationsHTML()}
        ${guestsHTML()}
`
mainContainer.innerHTML = applicationHTML
