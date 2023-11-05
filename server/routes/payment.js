const router = require("express").Router();
const Payments = require("../models/payments");


router.get("/", async (req, res) => {
    try {
        const payment = await Payments.find({ user_id: req.user._id });
        res.status(200).send({ data: payment });
    } catch (error) {
        console.log(req.user);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
