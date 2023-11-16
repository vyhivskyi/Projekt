const router = require("express").Router();
const IncidentReports = require("../models/incidentReports");
const Rooms = require("../models/rooms")
const { User } = require("../models/user")
router.post("/", async (req, res) => {
    try {
        const room = await Rooms.findOne({ occupants: req.body.user_id })
        if (!room) {
            return res.status(404).send({ message: "Nie znaleziono pokoju dla użytkownika" });
        }
        const receptionist = await User.findOne({ accommodation_id: room.accommodation_id })
        if (!receptionist) {
            return res.status(404).send({ message: "Nie znaleziono opiekuna dla akademika" });
        }
        const newIncident = {
            user_id: req.body.user_id,
            receptionist_id: receptionist._id,
            room_id: room._id,
            report_date: new Date(),
            issue_thema: req.body.issue_thema,
            issue_description: req.body.issue_description,
            resolution_status: "Submitted",
            resolution_description: "",
            //resolution_date: { type: Date, required: false }
        }
        console.log(newIncident)
        await new IncidentReports(newIncident).save();
        //await new IncidentReports({ ...req.body }).save();
        res.status(201).send({ message: "Wniosek złożony" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
