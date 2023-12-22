// controllers/adminEventController.js
const Event = require('../models/adminEvents');

const addEventForm = (req, res) => {
  res.render('adminDash/event/addEvent');
};

const createEvent = async (req, res) => {
  try {
    const { category, name, organizer, description, venue, time } = req.body;

    // Check if req.file is defined before accessing its properties
    const image = req.file ? req.file.filename : undefined;

    const event = new Event({
      category,
      name,
      organizer,
      description,
      venue,
      time,
      image, // Save the image path
    });

    await event.save();

    req.session.message = {
      type: 'success',
      message: 'Event created successfully!',
    };

    // Redirect to the admin dashboard's all events page
    res.redirect('/adminDash/event/list-events');
  } catch (err) {
    res.json({ message: err.message, type: 'danger' });
  }
};

const listEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.render('adminDash/event/listEvents', { events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        await Event.findByIdAndDelete(eventId);

        req.session.message = {
            type: 'success',
            message: 'Event deleted successfully!',
        };

        res.redirect('/adminDash/event/list-events');
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
};


module.exports = {
  addEventForm,
  createEvent,
  listEvents,
};
