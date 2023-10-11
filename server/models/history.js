const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const historySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    application_history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications',
        required: false
    }],
    room_history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: false
    }]
})
historySchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const History = mongoose.model("History", historySchema)

module.exports = History
