getAllWorkouts = (req, res) => {
  res.send("Get all workouts");
};
getWorkout = (req, res) => {
  res.send("Get a workout" + req.params.id);
};
createWorkout = (req, res) => {
  res.send("Create a workout");
};
updateWorkout = (req, res) => {
  res.send("Update a workout");
};
deleteWorkout = (req, res) => {
  res.send("Delete a workout");
};
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
