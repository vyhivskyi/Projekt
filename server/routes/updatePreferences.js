const router = require("express").Router();
const { User, validate } = require("../models/user");


router.put("/", async (req, res) => {
    try {
        const userId = req.user._id;
        const updatedUser = req.user.preference;
        await User.findByIdAndUpdate(userId, updatedUser )
        //res.redirect("/profile/preference")
        console.log("qwerty ")
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
        console.log(req.user);
        console.log("trwq")
    }
});

module.exports = router;