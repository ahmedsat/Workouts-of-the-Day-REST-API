const workoutService = require("../services/workoutService");

getAllWorkouts = (req, res) => {
  try {
    const allWorkouts = workoutService.getAllWorkouts();
    res.status(200).json({ status: "success", data: allWorkouts });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "error",
      data: error?.message || "Internal server error",
    });
  }
};

getWorkout = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ status: "error", message: "Missing id" });
  }
  try {
    const workout = workoutService.getWorkout(id);
    return res.status(200).json({ status: "success", data: workout });
  } catch (error) {
    return res.status(error?.status || 500).json({
      status: "error",
      data: error?.message || "Internal server error",
    });
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
  try {
    const createdWorkout = workoutService.createWorkout(newWorkout);
    res.status(201).json({
      status: "success",
      data: createdWorkout,
    });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "error",
      data: error?.message || "Internal server error",
    });
  }
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
  try {
    const updatedWorkout = workoutService.updateWorkout(id, body);
    res.status(200).json({
      status: "success",
      data: updatedWorkout,
    });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "error",
      data: error?.message || "Internal server error",
    });
  }
};

deleteWorkout = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Missing id",
    });
  }
  try {
    const deletedWorkout = workoutService.deleteWorkout(id);
    res.status(200).json({
      status: "success",
      data: deletedWorkout,
    });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "error",
      data: error?.message || "Internal server error",
    });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
