const router = require("express").Router();
const Rooms = require("../models/rooms");


router.get("/", async (req, res) => {
    try {
        const rooms = await Rooms.find();
        console.log(rooms)
        res.json(rooms);
    } catch (error) {
        console.log(req.user);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
