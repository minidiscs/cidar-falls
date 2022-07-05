import { locationsString } from "./Locations.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="banner"><img class="banner--logo" src="assets/cider-falls.webp"><h1 class="banner--title">Cider Falls Park</h1></section>
        ${locationsString()}
`

mainContainer.innerHTML = applicationHTML