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
        const roomsToUpdate = await Rooms.find({ occupants: studentId });

        await Promise.all(roomsToUpdate.map(async (roomToUpdate) => {
            try {
                await Rooms.updateOne(
                    { _id: roomToUpdate._id },
                    { $pull: { occupants: studentId } }
                );
                console.log(`Student removed from room ${roomToUpdate.room_number}`);
            } catch (error) {
                console.error(`Error removing student from room ${roomToUpdate.room_number}:`, error);
            }
        }));

        await Applications.updateOne({ user_id: studentId }, { status });
        if (status === 'Approved') {
            const selectedRoom = await Rooms.findOne({ _id: room });
            console.log(selectedRoom)
            if (!selectedRoom.occupants) {
                selectedRoom.occupants = [];
            }

            selectedRoom.occupants.push(studentId);
            await selectedRoom.save();
        }
        res.json({ message: 'Status wniosku został zaktualizowany.' });
    } catch (error) {
        console.error('Error updating application status:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
