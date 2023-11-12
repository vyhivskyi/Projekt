const router = require("express").Router();
const Applications = require("../models/applications");


router.get("/", async (req, res) => {
  try {
    const status = await Applications.findOne({user_id: req.user._id});
    res.status(200).send({ data: status });
  } catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
