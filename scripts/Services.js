import { getLocations, getServices, getServicesLocations } from "./database.js";
//get services, display at top of page and create click listener that alerts locations which have that service

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

document.addEventListener("click", (clickEvent) => locationsWithService(clickEvent))

const locationsWithService = (clickEvent) => {
    const itemClicked = clickEvent.target
    let locationString = ""
    if (itemClicked.id.startsWith("service")) {
        const [,serviceId] = itemClicked.id.split("--")
        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                for (const servicesLocation of servicesLocations) {
                    if (service.id === servicesLocation.servicesId) {
                        for (const location of locations) {
                            if (location.id === servicesLocation.locationId && !locationString) {
                                locationString = `${location.name}`
                            }
                            else if (location.id === servicesLocation.locationId && locationString != null) {
                                locationString = `${locationString} and ${location.name}`
                            }
                        }
                    }
                }
                window.alert(`${service.name} can be found at ${locationString}`)
            }
        }
    }
}
