import React from "react";
import { Outlet, Navigate } from "react-router-dom"; // ✅ Import Navigate
import { useStateContext } from "../contexts/ContextProvider"; // ✅ Correct import

const DefaultLayout = () => {
  const { user, token } = useStateContext(); // ✅ Corrected function name

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet /> {/* This renders child routes like Dashboard & Users */}
    </div>
  );
};

export default DefaultLayout;
