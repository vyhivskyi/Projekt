const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const checkoutsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    checkout_date: { type: Date, required: false },
    remarks: { type: String, required: false }
})
checkoutsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Checkouts = mongoose.model("Checkouts", checkoutsSchema)

module.exports = Checkouts
