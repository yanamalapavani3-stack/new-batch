const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/Project");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentprojects");

app.get("/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.post("/projects", async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});