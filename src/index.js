const express = require("express");
const v1WorkoutRoutes = require("./routes/workoutRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1", v1WorkoutRoutes);
app.get("/", (req, res) => res.send("<h2>Hello World</h2>"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
