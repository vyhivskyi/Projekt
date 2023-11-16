const router = require("express").Router();
const IncidentReports = require("../models/incidentReports");


router.get("/", async (req, res) => {
  try {
    const issue = await IncidentReports.find({user_id: req.user._id});
    if (issue) {
      res.status(200).json(issue);
    } else {
      console.log("Użytkownik nie ma zgłoszeń");
    }
  } catch (error) {
    console.log(req.user);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:issueId", async (req, res) => {
    const { issueId } = req.params;
    try{
        const issue = await IncidentReports.findById(issueId);
        res.status(200).json(issue)
    }
    catch (error) {
        console.log(req.user);
        res.status(500).send({ message: "Internal Server Error" });
      }
});

module.exports = router;
