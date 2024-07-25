const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
 
const listingSchema = new Schema({
    title: {
     type: String,
     required: true,
    },
    description: String,
    image: {
    type: String,
    set: (v) => v=== "" ? " https://unsplash.com/photos/a-blue-car-parked-on-the-side-of-a-road-next-to-palm-trees-DnYcKOF5fkQ" :v,

    },

    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;