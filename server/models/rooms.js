const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const roomsSchema = new mongoose.Schema({
    accommodation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accommodations',
        required: true
    },
    room_number: { type: Number, required: true },
    room_type: { type: String, required: true },
    occupants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: false
    }]
})
roomsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Rooms = mongoose.model("Rooms", roomsSchema)

module.exports = Rooms
