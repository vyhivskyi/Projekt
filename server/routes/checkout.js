const router = require("express").Router();
const Checkouts = require("../models/checkouts");

router.get("/", async (req, res) => {
  try {
    const checkoutsWithUserDetails = await Checkouts.find().populate('user_id', 'first_name last_name');

    res.json(checkoutsWithUserDetails);
  } catch (error) {
    console.error("Error fetching checkouts:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await new Checkouts({ ...req.body }).save();
    res.status(201).send({ message: "Wniosek złożony" });
  } catch (error) {
    console.log(req.body);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
