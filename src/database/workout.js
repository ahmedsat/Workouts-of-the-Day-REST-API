const DB = require("./db.json");
const { saveToJSON } = require("../database/utils.js");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getWorkout = (id) => {
  const workout = DB.workouts.find((workout) => workout.id === id);
  if (workout) {
    return workout;
  } else {
    return null;
  }
};

const createWorkout = (newWorkout) => {
  const workoutExists = DB.workouts.find(
    (workout) => workout.name === newWorkout.name
  );

  if (workoutExists) {
    throw new Error("Workout already exists");
  }

  DB.workouts.push(newWorkout);
  saveToJSON;
  saveToJSON(DB, __dirname + "/db.json");
  return newWorkout;
};

const updateWorkout = (id, changes) => {
  const indexOfWorkout = DB.workouts.findIndex((workout) => workout.id === id);
  if (indexOfWorkout === -1) {
    return null;
  }
  DB.workouts[indexOfWorkout] = changes;
  saveToJSON(DB, __dirname + "/db.json");
  return changes;
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
};
