const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    building: {
        type: String
    },
    street: {
        type: String
    },
    zipcode: {
        type: String
    }
})

const ResturantSchema = new mongoose.Schema({
    address: {
        type: AddressSchema,
        required: true
      },
  city: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  resturant_id: {
    type: String,
    required: true
  }
});




const Resturants = mongoose.model("Resturants", ResturantSchema);
module.exports = Resturants;