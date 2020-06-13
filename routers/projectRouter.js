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

router.get('/:id', (req, res) => {
    if (!req.params.id){
        res.status(400).json({
            message: "Must include id in your request"
        })
    }
    projects
   .get(req.params.id)
   .then((project) => {
     res.status(200).json(project)
   })
   .catch((err) => {
     res.status(500).json({
       message: "Error retrieving this specific project"
     })
   })
 });



 router.get('/actions', (req, res) => {
     projects
     .getProjectActions(req.body)
     .then((actions) => {
         res.status(200).json(actions)
     })
     .catch((err) => {
        res.status(500).json({
          message: "Error retrieving actions for this project"
        })
      })
 })

 router.post('/', (req, res) => {

    projects
     .insert(req.body)
     .then((project) => {
         res.status(201).json({message: `Success ${project}`})
     })
     .catch((err) => {
         res.status(500).json({message: `Failure ${err}`})
     })
 })

 router.put("/:id", (req, res) => {
    projects
     .update(req.params.id, req.body)
     .then((project) => {
         res.status(200).json({ project })
     })
     .catch((err) => {
         res.status(500).json({err})
     })
 })

 router.delete('/:id', (req, res) => {
    projects
      .remove(req.params.id)
      .then((project) => res.status(200).json(project))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;