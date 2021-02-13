const express = require('express'); 
const router = express.Router(); 
// const Task = require('../models/tasks.js'); 

// Index

router.get('/', (req, res) => {
    console.log('you hit the index page'); 
});

module.exports = router; 