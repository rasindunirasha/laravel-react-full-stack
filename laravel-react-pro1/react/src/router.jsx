import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Layout for Authenticated Pages */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<App />} /> {/* Homepage */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Guest Layout for Unauthenticated Pages */}
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
