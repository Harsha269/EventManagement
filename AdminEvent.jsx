import  { useEffect, useState } from "react";
import axios from "axios";

const AdminEvent = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await api.get("http://localhost:8081/api/admin/events", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:8081/api/admin/events/${id}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchEvents();
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/admin/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <h2>Admin Event Management</h2>
      <button onClick={logout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e._id}>
              <td>{e.title}</td>
              <td>{new Date(e.date).toLocaleDateString()}</td>
              <td>{e.createdBy?.name}</td>
              <td>{e.status}</td>
              <td>
                <button onClick={() => updateStatus(e._id, "approved")}>Approve</button>
                <button onClick={() => updateStatus(e._id, "rejected")}>Reject</button>
                <button onClick={() => deleteEvent(e._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEvent;
