// const router = require("express").Router()
// const { User, validate } = require("../models/user")
// const Applications = require("../models/applications")
// const bcrypt = require("bcryptjs")
// router.post("/", async (req, res) => {
//     try {
//         const { error } = validate(req.body)
//         if (error)
//             return res.status(400).send({ message: error.details[0].message })
//         const user = await User.findOne({ email: req.body.email })
//         if (user)
//             return res
//                 .status(409)
//                 .send({ message: "User with given email already Exist!" })
//         const salt = await bcrypt.genSalt(Number(process.env.SALT))
//         const hashPassword = await bcrypt.hash(req.body.password, salt)
//         const newUser = new User({ ...req.body, password: hashPassword })
//         await newUser.save()
//         userId = newUser._id
//         await new Applications({
//             user_id: userId,
//             application_date: new Date(),
//             status: "Submitted",
//             remarks: ""
//         }).save()
//         res.status(201).send({ message: "Wniosek złożony" })
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" })
//     }
// })

// module.exports = router
const router = require("express").Router()
const { User, validate } = require("../models/user")
const bcrypt = require("bcryptjs")
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })
        const user = await User.findOne({ email: req.body.email })
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" })
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        await new User({ ...req.body, password: hashPassword }).save()
        res.status(201).send({ message: "Wniosek złożony" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
});

router.get("/students", async (req, res) => {
    try {
      const students = await User.find({ role: "Student" });
      res.json(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

module.exports = router