const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    student: String,
    description: String
});

module.exports = mongoose.model("Project", projectSchema);