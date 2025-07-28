// const Event = require("../models/event.model");
const Event = require("../Models/event.model")


const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events" });
  }
};


const updateEventStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(id, { status }, { new: true });
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json({ message: "Event status updated", event });
  } catch (err) {
    res.status(500).json({ message: "Error updating event status" });
  }
}


const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting event" });
  }
}
module.exports = {getAllEvents,updateEventStatus,deleteEvent}
