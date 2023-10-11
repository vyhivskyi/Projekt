const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const paymentsSchema = new mongoose.Schema({
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
    amount: {type: Number, required: true},
    payment_date: {type: Date, required: true}
})
paymentsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Payments = mongoose.model("Payments", paymentsSchema)

module.exports = Payments
