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

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkout,
};
