const router = require("express").Router();
const Applications = require("../models/applications");
const Rooms = require("../models/rooms")

router.get("/", async (req, res) => {
    try {
        const application = await Applications.find();
        res.json(application);
    } catch (error) {
        console.log(req.user);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
router.put('/:studentId', async (req, res) => {
    try {
        const { studentId } = req.params;
        const { status, room } = req.body;
        await Applications.updateOne({ user_id: studentId }, { status });
        if (status === 'Approved') {
            const selectedRoom = await Rooms.findOne({ room_number: room });
            console.log(selectedRoom)
            if (selectedRoom) {
                selectedRoom.occupants.push(studentId);
                await selectedRoom.save();
            }
        }
        res.json({ message: 'Status wniosku został zaktualizowany.' });
    } catch (error) {
        console.error('Error updating application status:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
