const router = require("express").Router();
const Payments = require("../models/payments");
const Users = require("../models/user")

router.get("/", async (req, res) => {
    try {
        const payments = await Payments.find().populate('user_id', 'first_name last_name');
        res.json(payments);
    } catch (error) {
        console.error("Error fetching payments:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        await new Payments({ ...req.body }).save();
        res.status(201).send({ message: "Success" });
    } catch (error) {
        console.error("Error saving payment data: ", error); // Log the error here
        res.status(500).send({ message: "Failed to save payment data" });
    }
});

module.exports = router;


