const router = require("express").Router();
const { Rooms, validate } = require("../models/rooms");


router.get("/", async (req, res) => {
  try {
    const room = await Rooms.findOne({occupants: req.user._id});
    console.log(req.user);
    console.log(room)
    res.status(200).send({ data: room, message: "Szczegóły konta" });
  } catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
