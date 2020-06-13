const express = require('express');

const router = express.Router();

const actions = require("../data/helpers/actionModel")

router.get('/', (req, res) => {
   actions
  .get()
  .then((actions) => {
    res.status(200).json(actions)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving actions"
    })
  })
});

router.get('/:id', (req, res) => {
    if (!req.params.id){
        res.status(400).json({
            message: "Must include id in your request"
        })
    }
    actions
   .get(req.params.id)
   .then((action) => {
     res.status(200).json(action)
   })
   .catch((err) => {
     res.status(500).json({
       message: "Error retrieving this specific action"
     })
   })
 });

 router.post('/', (req, res) => {

     actions
     .insert(req.body)
     .then((action) => {
         res.status(201).json({message: `Success ${action}`})
     })
     .catch((err) => {
         res.status(500).json({message: `Failure ${err}`})
     })
 })

 router.put("/:id", (req, res) => {
     actions
     .update(req.params.id, req.body)
     .then((action) => {
         res.status(200).json({ action })
     })
     .catch((err) => {
         res.status(500).json({err})
     })
 })

 router.delete('/:id', (req, res) => {
    actions
      .remove(req.params.id)
      .then((action) => res.status(200).json(action))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;