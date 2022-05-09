const DB = require("./db.json");
const { saveToJSON } = require("../database/utils.js");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw error;
  }
};

const getWorkout = (id) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === id);
    if (!workout) {
      throw { status: 404, message: "Workout not found" };
    }
    return workout;
  } catch (error) {
    throw error;
  }
};

const createWorkout = (newWorkout) => {
  try {
    const workoutExists = DB.workouts.find(
      (workout) => workout.name === newWorkout.name
    );

    if (workoutExists) {
      throw {
        status: 400,
        message: "Workout with this name already exists",
      };
    }

    DB.workouts.push(newWorkout);
    saveToJSON;
    saveToJSON(DB, __dirname + "/db.json");
    return newWorkout;
  } catch (error) {
    throw error;
  }
};

const updateWorkout = (id, changes) => {
  try {
    const indexOfWorkout = DB.workouts.findIndex(
      (workout) => workout.id === id
    );
    if (indexOfWorkout === -1) {
      throw {
        status: 404,
        message: "Workout not found",
      };
    }
    DB.workouts[indexOfWorkout] = changes;
    saveToJSON(DB, __dirname + "/db.json");
    return changes;
  } catch (error) {
    throw error;
  }
};

const deleteWorkout = (id) => {
  try {
    const indexOfWorkout = DB.workouts.findIndex(
      (workout) => workout.id === id
    );
    if (indexOfWorkout === -1) {
      throw {
        status: 404,
        message: "Workout not found",
      };
    }
    const deletedWorkout = DB.workouts.splice(indexOfWorkout, 1);
    saveToJSON(DB, __dirname + "/db.json");
    return deletedWorkout[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
