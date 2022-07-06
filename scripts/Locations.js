import { getLocations, getSubLocations, getServices, getServicesLocations } from "./database.js";
//get locations, publish list of locations in two rows of 3 columns

const locations = getLocations()
const subLocations = getSubLocations()
const services = getServices()
const servicesLocations = getServicesLocations()

export const locationsHTML = () => {
    let html = `<section class="locations">`
    let amenityEstablished = 1

    for (const location of locations) {
        html += `<article class="locations--card id="locations--${location.id}"><h2>${location.name}</h2><ul>`
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
