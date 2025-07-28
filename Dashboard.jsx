import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // const navigate = useNavigate();

  // const goHome = () => navigate("/home");

  return (
    <div className="min-vh-100 d-flex" style={{ backgroundColor: "#f5f7fa" }}>
      <div
        className="bg-white shadow-sm p-4"
        style={{ width: "260px", minHeight: "100vh", borderRight: "1px solid #dee2e6" }}
      >
        <div className="mb-4">
          <h4 className="text-primary fw-semibold">User</h4>
          <hr />
        </div>

        <ul className="nav flex-column gap-2">

          <li className="nav-item">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              UserProfile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="eventmanage"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Event Management
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="view"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              View Profile
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink
              to="resume"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Resume Builder
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink
              to="skilljobseeker"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Jobseeker Skill Test
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink
              to="invite"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Interview Invite
            </NavLink>
          </li> */}

          {/* <li className="nav-item"> */}
            {/* <NavLink
              to="chat"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Jobseeker Chat
            </NavLink>
          </li> */}

           {/* <li className="nav-item">
            <NavLink
              to="chat"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Jobseeker Chat
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink
              to="notify"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
              }
            >
              Notifications
            </NavLink>
          </li> */}

          
          {/* <li className="mt-4">
            <button className="btn btn-outline-primary w-100" onClick={goHome}>
               Back to Home
            </button>
          </li> */}
        </ul>
      </div>

      <div className="p-4 flex-grow-1">
        <h5 className="text-secondary">Welcome to the User Dashboard</h5>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;
