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

updateWorkout = (id, changes) => {
  const workoutToUpdate = workoutDB.getWorkout(id);
  if (!workoutToUpdate) {
    return null;
  }
  const updatedWorkout = {
    ...workoutToUpdate,
    ...changes,
    updatedAt: new Date().toLocaleString("en-EG", {
      timeZone: "UTC",
    }),
  };
  const updatedWorkoutInDB = workoutDB.updateWorkout(id, updatedWorkout);
  return updatedWorkoutInDB;
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
