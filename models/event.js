// event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  mentorName: String, // Add the mentor's name field
  imageUrl: String, // Add the image URL field
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
