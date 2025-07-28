import { useState, useEffect } from "react";
import { api } from "../axios";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    organization: ""
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/profile");
      setProfile(res.data);
      setFormData(res.data);
    } catch (err) {
      console.log("No profile found");
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (profile) {
        const res = await api.put("/profile", formData);
        setProfile(res.data);
      } else {
        const res = await api.post("/profile", formData);
        setProfile(res.data);
      }
    } catch (err) {
      console.error("Profile error:", err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete("/profile");
      setProfile(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        bio: "",
        location: "",
        organization: ""
      });
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>{profile ? "Update" : "Create"} Your Profile</h3>
      <form onSubmit={handleSubmit}>
        {["name", "email", "phone", "bio", "location", "organization"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          {profile ? "Update" : "Create"} Profile
        </button>
        {profile && (
          <button type="button" onClick={handleDelete} className="btn btn-danger ms-2">
            Delete Profile
          </button>
        )}
      </form>

      {/* ✅ View Profile in Table Format */}
      {profile && (
        <div className="mt-5">
          <h4>Profile Details</h4>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Bio</th>
                <th>Location</th>
                <th>Organization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.phone}</td>
                <td>{profile.bio}</td>
                <td>{profile.location}</td>
                <td>{profile.organization}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
