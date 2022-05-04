const workoutService = require("../services/workoutService");

getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
};
getWorkout = (req, res) => {
  const workout = workoutService.getWorkout();
  res.send("Get a workout" + req.params.id);
};
createWorkout = (req, res) => {
  const createdWorkout = workoutService.createWorkout();
  res.send("Create a workout");
};
updateWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateWorkout();
  res.send("Update a workout");
};
deleteWorkout = (req, res) => {
  const deletedWorkout = workoutService.deleteWorkout();
  res.send("Delete a workout");
};
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
