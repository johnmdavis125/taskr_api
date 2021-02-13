const express = require('express'); 
const router = express.Router(); 
const Task = require('../models/task.js'); 

// Index

router.get('/', (req, res) => {
    Task.find({}, (error, allTasks) => {
        error ? res.status(404).json(error) :
        res.status(200).json(allTasks);
    });
});

// New

// Delete
router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (error, task) => {
        error ? res.status(404).json(error) :
        res.status(200).json(task);
    });
});

// Update

// Create
router.post('/', (req, res) => {
    console.log(req.body);
    // Use Model to create question document
    Task.create(req.body, (error, createdTask) => {
        error ? res.status(404).json(error) : 
        res.status(200).json(createdTask)
    });
});

// Edit

// Show

// export router
module.exports = router; 