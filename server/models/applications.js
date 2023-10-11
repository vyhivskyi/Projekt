const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const applicationsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    application_date: { type: Date, required: true },
    status: {
        type: String,
        required: true,
        enum: ['Submitted', 'Approved', 'Rejected']
    },
    remarks: { type: String, required: false }
})
applicationsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Applications = mongoose.model("Applications", applicationsSchema)

module.exports = Applications
