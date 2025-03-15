import React from "react";
import { Outlet, Navigate } from "react-router-dom"; // ✅ Import Navigate
import { useStateContext } from "../contexts/ContextProvider"; // ✅ Import useStateContext

const GuestLayout = () => {
    const { token } = useStateContext(); // ✅ Correct usage

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            
            <Outlet /> {/* This renders child routes like Login & Signup */}
        </div>
    );
};

export default GuestLayout;
