// server/routes/reviews.js

const express = require('express');
const router = express.Router();
const Opinion = require('../models/Opinion');

router.get("/", async (req, res) => {
  try {
    const reviews = await Opinion.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error getting reviews:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post("/", async (req, res) => {
  const newReviewData = req.body;

  try {
    const newReview = await Opinion.create(newReviewData);
    res.json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
