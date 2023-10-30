const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Administrator', 'Student', 'Opiekun', 'Kierownik'] },
    faculty: { type: String, required: true },
    department: { type: String, required: true },
    year_of_study: { type: Number, required: true },
    student_id: { type: String, required: true },
    preference: { 
        dsbool: { type: Boolean, required: true },
        ds: { type: String, required: true },
        roombool: { type: Boolean, required: true },
        room: { type: String, required: true },
        usersbool: { type: Boolean, required: true },
        users: { type: String, required: true },
    },
    profile_picture: { type: String, required: true }
})
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}
const User = mongoose.model("User", userSchema)
const validate = (data) => {
    const schema = Joi.object({
        first_name: Joi.string().required().label("First Name"),
        last_name: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        date_of_birthday: Joi.date().required().label("Date Of Birthday"),
        gender: Joi.string().required().label("Gender"),
        faculty: Joi.string().required().label("Faculty"),
        department: Joi.string().required().label("Department"),
        year_of_study: Joi.number().required().label("Year Of Study"),
        student_id: Joi.string().required().label("Student ID"),
        preference: Joi.object().keys({
            dsbool: Joi.boolean().required().label("DS Bool"),
            ds: Joi.string().required().label("DS"),
            roombool: Joi.boolean().required().label("Room Bool"),
            room: Joi.string().required().label("Room"),
            usersbool: Joi.boolean().required().label("Users Bool"),
            users: Joi.string().required().label("Users")
        }),
        role: Joi.string().valid('Administrator', 'Student', 'Opiekun', 'Kierownik').required().label("Role"), 
        profile_picture: Joi.string().required().label("Profile Picture")
    })
    return schema.validate(data)
}
module.exports = { User, validate }