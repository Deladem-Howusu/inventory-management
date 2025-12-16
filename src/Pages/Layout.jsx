import Sidebar from "./Sidebar";
import Navbar from "../Component/navbar";
// import DashboardContent from "./Dashboard";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <Navbar />
      <Outlet />
    </div>
  );
}
export default Layout;
