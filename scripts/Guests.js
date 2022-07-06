import { getGuests } from "./database.js";
//get guests, publish list of guests

const guests = getGuests()

export const guestsHTML = () => {
    let html = `<section class="guests"><article class="guests--card"><h2>Current Guests</h2><ul>`

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    html +="</ul></article></section>"

    return html
}
