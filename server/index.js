require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const profileRoutes = require("./routes/profile")
const preferenceRoutes = require("./routes/preferences")
const tokenVerification = require('./middleware/tokenVerification')
const deleteRoutes = require("./routes/delete")
const updatePreferencesRoutes = require("./routes/updatePreferences")
//middleware
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
const connection = require('./db')
connection()
app.get("/api/profile", tokenVerification)
app.get("/api/profile/preference", tokenVerification)
app.get("/api/profile/preference/edit/:id", tokenVerification, updatePreferencesRoutes)
app.get("/api/profile/delete", tokenVerification);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/profile/preference", preferenceRoutes)
app.use("/api/profile/delete", deleteRoutes);
app.use("/api/profile/preference/edit", updatePreferencesRoutes)