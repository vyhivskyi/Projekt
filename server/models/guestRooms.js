const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const guestRoomsSchema = new mongoose.Schema({
    reserved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    },
    accommodation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accommodations',
        required: true
    },
    room_number: { type: Number, required: true },
    is_reserved: { type: Boolean, required: true },
    reservation_date: { type: Date, required: false },
    checkout_date: { type: Date, required: false }
})
guestRoomsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const GuestRooms = mongoose.model("GuestRooms", guestRoomsSchema)

module.exports = GuestRooms
