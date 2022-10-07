//this file creates "demo" data for the app

const db = require ('../models')

//"demo" data
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/dog.jpg',
    founded: 1989
} , {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/kitten1.jpg',
    founded: 2020
}])

//promise logic, creating console logs for troubleshooting success for failure
// the process.exit() is used to close the process after it runs
.then (() => {
    console.log('seed-places success!')
    process.exit()
})
.catch(err => {
    console.log('seed-places failure!')
    process.exit()
})