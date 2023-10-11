const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const documentsSchema = new mongoose.Schema({
    document_type: { type: String, required: true },
    document_file: { type: String, required: true }
})
documentsSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const Documents = mongoose.model("Documents", documentsSchema)

module.exports = Documents
