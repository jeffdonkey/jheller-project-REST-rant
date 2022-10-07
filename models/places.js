const mongoose = require('mongoose')

//Mongoose Schema for resturant listing
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: 'http://placekitten.com/350/350'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date() .getFullYear, 'Hey, this year is in the future!  What are you...a Chrononaut?']
    }
})

//custom method built, it access the resturant's fields
//to create a printed statement for the user
//note that arrow functions are not allowed in this syntax
//notice the return statement uses backticks (``)
placeSchema.methods.showEstablished = function () {
return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model ('Place', placeSchema)