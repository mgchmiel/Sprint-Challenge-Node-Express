const express = require('express');
const router = express.Router();
const db = require('../data/helpers/projectModel.js');
router.get('/', (req, res) => {
    db
    .get()
    .then(projects => {
        res.status(200).json({projects});
    })
    .catch(error => {
        res.status(500).json({error: "Error Retrieving Project"});
})
})
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db
    .get(id)
    .then(project => {
        res.status(200).json({project});
    })
    .catch(error => {
        res.status(500).json({error: "Error Retrieving Project"});
    })
});
router.get('/project_actions/:id', (req, res) => {
    const { id } = req.params;
    db
    .getProjectActions(id)
    .then(response => {
        res.status(200).json({response});
    })
    .catch(error => {
        res.status(500).json({error: "Error Rerieving Project"});
    })
});
router.post('/', (req, res) => {
    const { name, description, completed } = req.body;
    const newProj = { name, description, completed };
    if (!newProj.name || !newProj.description) res.status(400).json({errorMessage: "Need Name and Description"});
    else if(newProj.name.length > 140 || newProj.description.length > 140) res.status(400).json({errorMessage: "We Like Twitter Can't Do More than 140"});
    else {
        db
        .insert(newProj)
        .then(response => {
            res.json(newProj);
        })
        .catch(error => {
            res.status(500).json({error: "Error Adding Project"});
        })
    }
})
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    const newProj = { name, description, completed };
    db
    .update(id, newProj)
    .then(response => {
    if (response === null) res.status(404).json({error: "Does Not Exist(DNE)"});
    else {
    db.get(id)
    .then(proj => {
        res.status(200).json(proj);
})
    .catch(error => {
        res.status(500).json({error: "Error Retrieving Project"});
    })
    }
})
    .catch(error => {
        res.status(500).json({error: "Error Updating Project"});
    })
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db
    .remove(id)
    .then(response => {
    if (response < 1) res.status(404).json({error: "Does Not Exist(DNE)"});
    else {
     db
    .get()
    .then(resp => {
        res.json(resp);
})
    .catch(error => {
        res.status(500).json({error: "Error Retrieving Project"});
    })
   }
})
    .catch(error => {
        res.status(500).json({error: "Error Deleting Project"});
    })
})
module.exports = router;