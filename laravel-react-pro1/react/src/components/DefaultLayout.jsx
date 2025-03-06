import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <h2>Welcome to the App</h2>
      <Outlet /> {/* This renders child routes like Dashboard & Users */}
    </div>
  );
};

export default DefaultLayout;

