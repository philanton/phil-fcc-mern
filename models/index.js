const mongoose = require('mongoose');
const URI = require('../config/index');


mongoose.connect(process.env.MONGO_URI || URI);

mongoose.connection.on('connected', () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on('error', err => {
  console.log('Mongoose Default Connection Error: ' + err);
});
