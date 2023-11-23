const router = require("express").Router();
const IncidentReports = require("../models/incidentReports");
const { User } = require("../models/user")

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role == "Student") {
      const issue = await IncidentReports.find({ user_id: req.user._id });
      if (issue) {
        res.status(200).json(issue);
      } else {
        console.log("Użytkownik nie ma zgłoszeń");
      }
    }
    else if (user.role == "Opiekun") {
      const issue = await IncidentReports.find({ receptionist_id: req.user._id });
      if (issue) {
        res.status(200).json(issue);
      } else {
        console.log("Użytkownik nie ma zgłoszeń");
      }
    }
  } catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:issueId", async (req, res) => {
  const { issueId } = req.params;
  try {
    const issue = await IncidentReports.findById(issueId);
    res.status(200).json(issue)
  }
  catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/:issueId", async (req, res) => {
  const { issueId } = req.params;
  const { resolution_description } = req.body;
  console.log(req.body)
  try {
    //const issue = await IncidentReports.findById(issueId);
    await IncidentReports.updateOne({ _id: issueId },
      { resolution_status: "Done",
        resolution_description: resolution_description,
        resolution_date: new Date()
    })
    res.status(200).send({ message: "Wniosek zedytowany" });
  }
  catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
