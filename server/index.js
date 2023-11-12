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
const roomRoutes = require("./routes/room")
const roomsRoutes = require("./routes/rooms")
const checkoutRoutes = require("./routes/checkout")
const paymentRoutes = require("./routes/payment")
const checkoutRouter = require("./routes/checkout");
const statusRoutes = require("./routes/status")
const applicationRoutes = require("./routes/applications")
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
  
//middleware
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
const connection = require('./db')
connection()
app.get("/api/profile", tokenVerification)
app.get("/api/profile/preference", tokenVerification)
app.get("/api/profile/preference/edit", tokenVerification, updatePreferencesRoutes)
app.get("/api/profile/delete", tokenVerification);
app.get("/api/profile/room", tokenVerification)
app.get("/api/profile/payment", tokenVerification)
app.get("/api/profile/status", tokenVerification)
app.put("/api/kierownik/applications/:studentId", applicationRoutes)
app.use("/api/users", userRoutes)
app.use("/api/profile/checkout", checkoutRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/profile/preference", preferenceRoutes)
app.use("/api/kierownik/applications", applicationRoutes)
app.use("/api/profile/delete", deleteRoutes);
app.use("/api/profile/preference/edit", updatePreferencesRoutes)
app.use("/api/profile/room", roomRoutes)
app.use("/api/portiernia/rooms", roomsRoutes)
app.use("/api/profile/checkout", checkoutRouter);
app.use("/app/profile/payment", paymentRoutes)
app.use("/api/profile/status", statusRoutes)
app.post('/upload', upload.single('file'), (req, res) => {
  const fileUrl = req.file.filename;
  res.json({ fileUrl });
});
app.use('/uploads', express.static('uploads'));