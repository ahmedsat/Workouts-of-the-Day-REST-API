const workoutService = require("../services/workoutService");

getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.status(200).json({ status: "success", data: allWorkouts });
};

getWorkout = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ status: "error", message: "Missing id" });
  } else {
    const workout = workoutService.getWorkout(id);
    if (workout) {
      res.status(200).json({ status: "success", data: workout });
    } else {
      res.status(404).json({ status: "error", message: "Workout not found" });
    }
  }
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
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Missing id",
    });
  }
  const updatedWorkout = workoutService.updateWorkout(id, body);
  res.status(200).json({
    status: "success",
    data: updatedWorkout,
  });
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
