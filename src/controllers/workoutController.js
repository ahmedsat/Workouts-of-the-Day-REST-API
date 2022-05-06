const workoutService = require("../services/workoutService");

getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.status(200).json({ status: "success", data: allWorkouts });
};

getWorkout = (req, res) => {
  const workout = workoutService.getWorkout();
  res.send("Get a workout" + req.params.id);
};

createWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields",
    });
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).json({
    status: "success",
    data: createdWorkout,
  });
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
