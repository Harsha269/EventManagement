import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./component/Dashboard";
import UserProfile from "./component/UserProfile";
import AdminDashBoard from "./component/AdminDashboard";
import ManageUsers from "./component/ManageUsers";
import EventManagement from "./component/EventManagement";
import ViewProfile from "./component/ViewProfile";
import LogoutButton from "./component/LogoutButton";
import AdminEvent from "./component/AdminEvent";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutButton/>}/>

        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="eventmanage" element={<EventManagement />} />
          <Route path="view" element={<ViewProfile/>}/>
        </Route>

        
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="manage" element={<ManageUsers />} />
          <Route path="/adminevent" element={<AdminEvent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
