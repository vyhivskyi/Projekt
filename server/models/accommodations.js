const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const accommodationsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {type: String, required: true},
    number_of_rooms: {type: Number, required: true},
    available_rooms: {type: Number, required: true},
    photo_gallery: [{type: String}]
})
accommodationsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Accommodations = mongoose.model("Accommodations", accommodationsSchema)

module.exports = Accommodations
