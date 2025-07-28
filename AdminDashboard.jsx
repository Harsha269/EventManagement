import { NavLink, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
//   const navigate = useNavigate();

//   const goHome = () => {
//     navigate("/home");
//   };

  return (
    <div className="min-vh-100 d-flex" style={{ backgroundColor: "#f5f7fa" }}>
      
      <div
        className="bg-white shadow-sm p-4"
        style={{
          width: "260px",
          minHeight: "100vh",
          borderRight: "1px solid #dee2e6",
        }}
      >
        <div className="mb-4">
          <h4 className="text-primary fw-semibold">ADMIN PANEL</h4>
          <hr />
        </div>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <NavLink
              to="manage"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Manage Users
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="adminevent"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Admin Event
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink
              to="jobanalytics"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Job Analytics
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink
              to="applicationmanage"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Manage Applications
            </NavLink>
          </li> */}

          {/* <li className="nav-item">
            <NavLink
              to="overview"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Resume Overview
            </NavLink>
          </li> */}
 {/* <li className="nav-item">
            <NavLink
              to="adminnotification"
              className={({ isActive }) =>
                `nav-link px-3 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
            >
              Admin Notification
            </NavLink>
          </li> */}
          
          {/* <li className="nav-item mt-4">
            <button className="btn btn-outline-primary w-100" onClick={goHome}>
               Back to Home
            </button>
          </li> */}
        </ul>
      </div>

      
      <div className="p-4 flex-grow-1">
        <h5 className="text-secondary">Welcome to the Admin Dashboard</h5>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashBoard;
