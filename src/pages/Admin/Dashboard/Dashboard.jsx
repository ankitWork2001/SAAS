import React from "react";
import { Outlet } from "react-router-dom";
import FourGrid from "./FourGrid";
import GraphTable from './GraphTable';
import UserTable from './UserTable';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>
      {/* <FourGrid/> */}
      <Outlet />
      <GraphTable/>
      <UserTable/>
    </div>
  );
};

export default Dashboard;
