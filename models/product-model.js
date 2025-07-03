const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
    bgcolor: {
        type:String,
        default: "#ff3381f3"
    },
    panelcolor: {
        type: String,
        default: "#ff3381f3"
    },
    textcolor: String

})

 module.exports = mongoose.model("product" , productSchema);