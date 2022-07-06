import { getLocations, getSubLocations, getServices, getServicesLocations, getGuests } from "./database.js";
//get locations, publish list of locations in two rows of 3 columns

const locations = getLocations()
const subLocations = getSubLocations()
const services = getServices()
const servicesLocations = getServicesLocations()
const guests = getGuests()

export const locationsHTML = () => {
    let html = `<section class="locations">`
    let amenityEstablished = 1

    for (const location of locations) {
        html += `<article class="locations--card"><h2 id="locations--${location.id}">${location.name}</h2><ul>`
        for (const subLocation of subLocations) {
            if (subLocation.locationId === location.id) {
                html += `<li id="subLocation--${subLocation.id}">${subLocation.name}</li>`
            }
        }
        html += "</ul><p>Services available:</p><ul>"
        for (const servicesLocation of servicesLocations) {
            if (servicesLocation.locationId === location.id) {
                for (const service of services){
                    if (servicesLocation.servicesId === service.id) {
                        html += `<li id="service--${service.id}">${service.name}</li>`
                    }
                }
            }
        }

        html += "</ul></article>"
    }
    html += "</section>"

    return html
}

document.addEventListener("click", (clickEvent) => guestsInLocation(clickEvent))

const guestsInLocation = (clickEvent) => {
    const itemClicked = clickEvent.target
    let guestLocationCount = 0
    if (itemClicked.id.startsWith("locations")) {
        const [,locationId] = itemClicked.id.split("--")

        for (const location of locations) {
            if (location.id === parseInt(locationId)) {
                for (const guest of guests) {
                    if (guest.locationId === location.id) {
                        guestLocationCount++
                    }
                }
                window.alert(`${location.name} currently has ${guestLocationCount} guests`)
            }
        }
    }
}
