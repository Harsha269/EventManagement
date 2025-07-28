import { useEffect, useState } from "react";
import { api } from "../axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersWithProfiles();
  }, []);

  const fetchUsersWithProfiles = async () => {
    try {
      const res = await api.get("/admin/user-profiles");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching user profiles", err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Manage Users with Profiles</h3>
      {users.length === 0 ? (
        <p>No users have created profiles yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Organization</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((profile) => (
              <tr key={profile._id}>
                <td>{profile.name}</td>
                <td>{profile.user?.email}</td>
                <td>{profile.phone}</td>
                <td>{profile.location}</td>
                <td>{profile.organization}</td>
                <td>{profile.user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
