const { v4: uuid } = require("uuid");
const workoutDB = require("../database/workout.js");

getAllWorkouts = () => {
  try {
    const allWorkouts = workoutDB.getAllWorkouts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

getWorkout = (id) => {
  try {
    const workout = workoutDB.getWorkout(id);
    return workout;
  } catch (error) {
    throw error;
  }
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

  try {
    const createdWorkout = workoutDB.createWorkout(workoutToCreate);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

updateWorkout = (id, changes) => {
  try {
    const workoutToUpdate = workoutDB.getWorkout(id);

    const updatedWorkout = {
      ...workoutToUpdate,
      ...changes,
      updatedAt: new Date().toLocaleString("en-EG", {
        timeZone: "UTC",
      }),
    };

    const updatedWorkoutFromDB = workoutDB.updateWorkout(id, updatedWorkout);
    return updatedWorkoutFromDB;
  } catch (error) {
    throw error;
  }
};

deleteWorkout = (id) => {
  try {
    const deletedWorkout = workoutDB.deleteWorkout(id);
    return deletedWorkout;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
