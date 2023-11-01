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
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/profile", profileRoutes)
app.use("/api/profile/preference", preferenceRoutes)
app.use("/api/profile/delete", deleteRoutes);
app.use("/api/profile/preference/edit", updatePreferencesRoutes)
app.post('/upload', upload.single('file'), (req, res) => {
  const fileUrl = req.file.filename;
  res.json({ fileUrl });
});
app.use('/uploads', express.static('uploads'));