/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    guests: [{
        id: 1,
        name: "Alphonse Meron",
        locationId: 3,
    }, {
        id: 2,
        name: "Damara Pentecust",
        locationId: 4,
    }, {
        id: 3,
        name: "Anna Bowton",
        locationId: 2,
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        locationId: 5,
    }, {
        id: 5,
        name: "Elmira Bick",
        locationId: 6,
    }, {
        id: 6,
        name: "Bernie Dreger",
        locationId: 1,
    }, {
        id: 7,
        name: "Rolando Gault",
        locationId: 3,
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        locationId: 5,
    }, {
        id: 9,
        name: "Tomlin Cutill",
        locationId: 6,
    }, {
        id: 10,
        name: "Arv Biddle",
        locationId: 2,
    }, {
        id: 11,
        name: "Angel Quintero",
        locationId: 2,
    }, {
        id: 12,
        name: "Rebecca Powers",
        locationId: 1,
    }, {
        id: 13,
        name: "Harvey Bedell",
        locationId: 6,
    }, {
        id: 14,
        name: "Winston George",
        locationId: 4,
    }, {
        id: 15,
        name: "Jack Winslew",
        locationId: 5,
    }, {
        id: 16,
        name: "Mara Oliver",
        locationId: 4,
    }, {
        id: 17,
        name: "Anton Michaels",
        locationId: 2,
    }, {
        id: 18,
        name: "Hugo Drier",
        locationId: 5,
    }, {
        id: 19,
        name: "Rita Slick",
        locationId: 6,
    }, {
        id: 20,
        name: "Paula Burger",
        locationId: 1,
    }, {
        id: 21,
        name: "Francisco White",
        locationId: 3,
    }, {
        id: 22,
        name: "Chris Hill",
        locationId: 5,
    }, {
        id: 23,
        name: "Max Jackson",
        locationId: 6,
    }, {
        id: 24,
        name: "Peanut Swimton",
        locationId: 2,
    }, {
        id: 25,
        name: "Enrico Aster",
        locationId: 2,
    }, {
        id: 26,
        name: "Betty Johns",
        locationId: 1,
    }, {
        id: 27,
        name: "Yasmin Cork",
        locationId: 6,
    }, {
        id: 28,
        name: "Albert Fincup",
        locationId: 4,
    }, {
        id: 29,
        name: "Miranda Pink",
        locationId: 5,
    }],

    locations: [{
        id: 3,
        name: "Lodge",
        direction: "NW",
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        direction: "N",
    }, {
        id: 1,
        name: "Chamfort River",
        direction: "NE",
    }, {
        id: 4,
        name: "Gander River",
        direction: "SW",
    }, {
        id: 5,
        name: "Campgrounds",
        direction: "S",
    }, {
        id: 6,
        name: "Pine Bluff Trails",
        direction: "SE",
    }],

    subLocations: [{
        id: 1,
        name: "Hotel",
        locationId: 3,
    }, {
        id: 2,
        name: "Restaurant",
        locationId: 3,
    }, {
        id: 3,
        name: "Office Park",
        locationId: 5,
    }, {
        id: 4,
        name: "Playground",
        locationId: 5,
    }],

    services: [{
        id: 1,
        name: "rafting",
    }, {
        id: 2,
        name: "canoeing",
    }, {
        id: 3,
        name: "fishing",
    }, {
        id: 4,
        name: "hiking",
    }, {
        id: 5,
        name: "picnicking",
    }, {
        id: 6,
        name: "rock climbing",
    }, {
        id: 7,
        name: "lodging",
    }, {
        id: 8,
        name: "parking",
    }, {
        id: 9,
        name: "information",
    }, {
        id: 10,
        name: "zip lines",
    }],

    servicesLocations: [{
        id: 1,
        servicesId: 1,
        locationId: 1,
    }, {
        id: 2,
        servicesId: 2,
        locationId: 1,
    }, {
        id: 3,
        servicesId: 3,
        locationId: 1,
    }, {
        id: 4,
        servicesId: 3,
        locationId: 4,
    }, {
        id: 5,
        servicesId: 4,
        locationId: 2,
    }, {
        id: 6,
        servicesId: 4,
        locationId: 4,
    }, {
        id: 7,
        servicesId: 4,
        locationId: 6,
    }, {
        id: 8,
        servicesId: 5,
        locationId: 2,
    }, {
        id: 9,
        servicesId: 5,
        locationId: 3,
    }, {
        id: 10,
        servicesId: 5,
        locationId: 6,
    }, {
        id: 11,
        servicesId: 6,
        locationId: 2,
    }, {
        id: 12,
        servicesId: 7,
        locationId: 3,
    }, {
        id: 13,
        servicesId: 7,
        locationId: 5,
    }, {
        id: 14,
        servicesId: 8,
        locationId: 3,
    }, {
        id: 15,
        servicesId: 8,
        locationId: 5,
    }, {
        id: 16,
        servicesId: 9,
        locationId: 3,
    }, {
        id: 17,
        servicesId: 9,
        locationId: 5,
    }, {
        id: 18,
        servicesId: 10,
        locationId: 6,
    }]
}

export const getGuests = () => database.guests.map(guest => ({...guest}))

export const getLocations = () => database.locations.map(location => ({...location}))

export const getSubLocations = () => database.subLocations.map(subLocation => ({...subLocation}))

export const getServices = () => database.services.map(service => ({...service}))

export const getServicesLocations = () => database.servicesLocations.map(serviceLocation => ({...serviceLocation}))
