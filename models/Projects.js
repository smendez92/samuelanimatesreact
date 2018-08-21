const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Location type is Required"
    },
    title: {
        type: String,
        trim: true,
        required: "Location name is Required"
    },
    description: {
        type: String,
        trim: true,
        required: "Location name is Required"
    },
    links: [
        {
            url: {
                type: String,
                trim: true
            },
            text: {
                type: String,
                trim: true
            }
        }
    ]
});

const Projects = mongoose.model("Projects", ProjectsSchema);
module.exports = Projects;