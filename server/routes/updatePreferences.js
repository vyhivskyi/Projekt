// updatePreferencesRoutes.js
const router = require("express").Router();
const { User } = require("../models/user");

router.put("/api/profile/preference/edit", async (req, res) => {
  try {
    const userId = req.user._id;

    // Assuming the preferences are in req.body.preference
    const updatedPreferences = req.body.preference;
    

    // Update user's preferences
    await User.findByIdAndUpdate(userId, { preference: updatedPreferences });

    res.status(200).send({ message: "Preferences updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
