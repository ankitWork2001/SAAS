import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar1 from "../components/Navbar1";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 z-20 bg-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-grow ml-64 w-full">
        <Navbar1 />

        {/* Spacer for navbar height */}
        <div style={{ height: "101px" }} />

        {/* Page content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
