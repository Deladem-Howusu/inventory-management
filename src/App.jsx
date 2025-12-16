import React from "react";
import "./App.css";
import Auth from "./Authentication/auth";
import Layout from "./Pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContent from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Report from "./Pages/Report";
import Suppliers from "./Pages/Suppliers";
import Orders from "./Pages/Orders";
import Manage from "./Pages/Manage";

function App() {
  return (
    <div className="w-lvw  relative">
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Layout />}>
              <Route index element={<DashboardContent />} />
              <Route path="dashboard" element={<DashboardContent />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="reports" element={<Report />} />
              <Route path="suppliers" element={<Suppliers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="managestore" element={<Manage />} />
            </Route>
          </Routes>
        </div>

        {/* <div className="fixed h-100 w-100  inset-0 bg-amber-400 flex items-center justify-center p-10 z-50">
          {" "}
          Hello
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
