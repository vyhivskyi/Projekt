const router = require("express").Router();
const Rooms = require("../models/rooms");


router.get("/", async (req, res) => {
  try {
    const room = await Rooms.findOne({occupants: req.user._id});
    console.log(req.user);
    console.log(room)
    if (room) {
      res.status(200).send({ data: room, message: "Szczegóły konta" });
    } else {
      console.log("Użytkownik nie jest mieszkańcem żadnego pokoju" );
    }
  } catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
