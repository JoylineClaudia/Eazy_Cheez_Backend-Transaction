const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({

    items: [
        {
            item:  [{}],
            quantity: Number
        }
    ],

    price: Number,

    deliveryLocation: String,

    user: ObjectId,

    shopOwner: {
        type: ObjectId,
        Default: null
    },

    status: String
})

module.exports = mongoose.model('transactionDocument',transactionSchema,'Transaction')

// "items": [
//     {
//       item: "rice",
//       quantity: 5    
//     }
//     ],
//   "price": 500,
//   "deliveryLocation": "karkala",
//   "user": {
//     "$oid": "6359089102b2da06289e169f"
//   },
  
//   "shopOwner": null,
  
//   "status": "ordered"