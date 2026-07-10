const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

global.dbConnected = false;
global.testimonialsStore = [
  {
    _id: 'seed-1',
    name: 'Aarav Sharma',
    role: 'Member',
    quote: 'Sky Gym helped me build strength and confidence in just a few months.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Sky Gym backend is running',
    database: global.dbConnected ? 'connected' : 'demo-mode',
  });
});

app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/plans', require('./routes/plans'));
app.use('/api/trainers', require('./routes/trainers'));

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

const connectToDatabase = async () => {
  if (!process.env.MONGO_URI) {
    console.warn('No MONGO_URI configured. Starting in demo mode.');
    startServer();
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    global.dbConnected = true;
    console.log('MongoDB connected');
    startServer();
  } catch (error) {
    console.warn('MongoDB not available. Starting in demo mode:', error.message);
    startServer();
  }
};

connectToDatabase();
