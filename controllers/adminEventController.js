// controllers/adminEventController.js
const Event = require('../models/event');

const adminEventController = {
    // Render the form to add an event
    addEventForm(req, res) {
        res.render('adminDash/event/addEvent');
    },

    // Handle form submission and create a new event
    async createEvent(req, res) {
        try {
            const { title, description, date, mentorName } = req.body;

            // Create a new event document
            const newEvent = new Event({
                title,
                description,
                date,
                mentorName,
            });

            // Save the event to the database
            await newEvent.save();

            // Redirect to the list of events
            res.redirect('/adminDash/event/list-events');
        } catch (error) {
            console.error('Error creating event:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    // List all events
    async listEvents(req, res) {
        try {
            const events = await Event.find().sort({ date: 'asc' });
            res.render('adminDash/event/listEvents', { events });
        } catch (error) {
            console.error('Error fetching events:', error);
            res.status(500).send('Internal Server Error');
        }
    },
};

module.exports = adminEventController;
