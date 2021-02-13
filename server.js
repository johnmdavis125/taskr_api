require('dotenv').config()
const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const db = mongoose.connection;
const path = require('path');
const cors = require('cors'); 
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = 3001; 

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('open', ()=>{
    console.log('taskr is connected to Mongo'); 
});

//Middleware
app.use(cors());
app.use(express.json()); 

// Cxn
app.get('/', (req, res)=>{
    res.send('Back is connected - updated')
});

// wire up controller
app.use('/tasks', require('./controllers/tasks.js')); 



// Listener
app.listen(PORT, ()=>{
    console.log('taskr backend is awake and listening', PORT)
});