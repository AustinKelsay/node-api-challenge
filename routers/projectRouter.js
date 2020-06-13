const express = require('express');

const router = express.Router();

const projects = require("../data/helpers/projectModel")

router.get('/', (req, res) => {
   projects
  .get()
  .then((project) => {
    res.status(200).json(project)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving projects"
    })
  })
});