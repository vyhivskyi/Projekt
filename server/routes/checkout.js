const router = require("express").Router()
const Checkouts = require("../models/checkouts")
router.post("/", async (req, res) => {
    try {
        /*const checkout = await Checkouts.findOne({user_id: req.user._id})
        if (checkout)
            return res
                .status(409)
                .send({ message: "Wniosek o wykwaterowanie już istnieje" })*/
        console.log(req.body)
        await new Checkouts({ ...req.body}).save()
        res.status(201).send({ message: "Wniosek złożony" })
    } catch (error) {
        console.log(req.body)
        res.status(500).send({ message: "Internal Server Error" })
    }
})

module.exports = router