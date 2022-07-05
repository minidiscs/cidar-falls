import { getLocations, getSubLocations, getServices, getServicesLocations } from "./database.js";
//get locations, publish list of locations in two rows of 3 columns

const locations = getLocations()
const subLocations = getSubLocations()
const services = getServices()

export const locationsHTML = () => {
    let html = `<section class="locations">`

    for (const location of locations) {
        html += `<article id="location--${location.id}"><h2>${location.name}</h2>${location.direction}<ul>`
        for (const subLocation of subLocations) {
            html += `<li id="subLocation--${subLocation.id}">${subLocation.name}</li>`
        }
        for (const service of services) {
            html += `<li id="service--${service.id}">${service.name}</li>`
        }
        html += "</ul></article>"
    }
    html += "</section>"

    return html
}
