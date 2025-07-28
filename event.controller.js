const Event = require("../Models/event.model")

const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, createdBy: req.userId });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.userId });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      req.body,
      { new: true }
    );
    if (!event) return res.status(403).json({ error: 'Not authorized' });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({ _id: req.params.id, createdBy: req.userId });
    if (!event) return res.status(403).json({ error: 'Not authorized' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {createEvent , getUserEvents , updateEvent , deleteEvent}



