import { useEffect, useState } from 'react';
import { api } from '../axios';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
  });

  const fetchEvents = async () => {
    try {
      const res = await api.get('/events');
      setEvents(res.data);
    } catch (err) {
      console.error('Error fetching events:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/events', form);
      fetchEvents();
      setForm({ title: '', description: '', date: '', time: '', location: '' });
    } catch (err) {
      console.error('Error creating event:', err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error('Error deleting event:', err.response?.data || err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input name="title" placeholder="Title" value={form.title} className="form-control mb-2" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} className="form-control mb-2" onChange={handleChange} />
        <input name="date" type="date" value={form.date} className="form-control mb-2" onChange={handleChange} required />
        <input name="time" type="time" value={form.time} className="form-control mb-2" onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} className="form-control mb-2" onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Add Event</button>
      </form>

      <h3>Your Events</h3>
      <ul className="list-group">
        {events.map(e => (
          <li key={e._id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{e.title}</strong> on {new Date(e.date).toLocaleDateString()} at {e.time}
            </div>
            <button onClick={() => handleDelete(e._id)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
