import { getLocations, getServices, getServicesLocations } from "./database.js";

const locations = getLocations()
const services = getServices()
const servicesLocations = getServicesLocations()

export const serviceHTML = () => {
    // let html = `<p>Park services:</p>`
    let html = ""

    for (const service of services) {

        html += `<div id="service--${service.id}" class="services--item">${service.name}</div>`
    }

        return html
}
