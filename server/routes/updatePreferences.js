const router = require("express").Router();
const { User, validate } = require("../models/user");


router.put("/edit/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;
        await User.findByIdAndUpdate(userId, { updatedUser }); res.redirect("/profile/preference")
        console.log("qwert")
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
        console.log("trwq")
    }
});

module.exports = router;