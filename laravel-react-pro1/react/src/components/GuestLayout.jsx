import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <h2>For guest users only</h2>
      <Outlet /> {/* This renders child routes like Login & Signup */}
    </div>
  );
};

export default GuestLayout;
