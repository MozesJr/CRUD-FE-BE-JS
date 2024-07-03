const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentdb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());

// Routes
const studentRouter = require('./routes/students');
const majorRouter = require('./routes/majors');

app.use('/api/students', studentRouter);
app.use('/api/majors', majorRouter);

app.listen(5000, () => console.log('Server Started'));
