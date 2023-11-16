const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const incidentReportsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    receptionist_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms',
        required: true
    },
    report_date: { type: Date, required: true },
    issue_thema: {type: String, required: true},
    issue_description: { type: String, required: true },
    resolution_status: { type: String, required: true },
    resolution_description: { type: String, required: false },
    resolution_date: { type: Date, required: false }
})
incidentReportsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const IncidentReports = mongoose.model("IncidentReports", incidentReportsSchema)

module.exports = IncidentReports
