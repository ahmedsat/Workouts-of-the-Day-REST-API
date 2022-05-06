const { v4: uuid } = require("uuid");
const workoutDB = require("../database/workout.js");

getAllWorkouts = () => {
  const allWorkouts = workoutDB.getAllWorkouts();
  return allWorkouts;
};

getWorkout = (id) => {
  const workout = workoutDB.getWorkout(id);
  return workout;
};

createWorkout = (newWorkout) => {
  const workoutToCreate = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("en-EG", {
      timeZone: "UTC",
    }),
    updatedAt: new Date().toLocaleString("en-EG", {
      timeZone: "UTC",
    }),
  };
  const createdWorkout = workoutDB.createWorkout(workoutToCreate);

  return createdWorkout;
};
updateWorkout = () => {
  return;
};
deleteWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
