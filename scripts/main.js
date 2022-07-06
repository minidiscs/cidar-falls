import { guestsHTML } from "./Guests.js";
import { locationsHTML } from "./Locations.js";
import { serviceHTML } from "./Services.js";

const mainContainer = document.querySelector("#container")
const headerContainer = document.querySelector("#services--header")

const headerHTML = `
        ${serviceHTML()}
`

const applicationHTML = `
        ${locationsHTML()}
        ${guestsHTML()}
`

headerContainer.innerHTML = headerHTML
mainContainer.innerHTML = applicationHTML
