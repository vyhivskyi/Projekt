const router = require("express").Router();
const { User, validate } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    res.status(200).send({ data: user, message: "Szczegóły konta" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
