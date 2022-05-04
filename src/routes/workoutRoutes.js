const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all workouts");
});
router.get("/:workoutId", (req, res) => {
  res.send("Get a workout");
});
router.post("/", (req, res) => {
  res.send("Create a workout");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update a workout");
});
router.delete("/:workoutId", (req, res) => {
  res.send("Delete a workout");
});

module.exports = router;
