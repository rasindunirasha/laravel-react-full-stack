import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom"; // ✅ Import Navigate
import { useStateContext } from "../contexts/ContextProvider"; // ✅ Correct import

const DefaultLayout = () => {
  const { user, token } = useStateContext(); // ✅ Corrected function name

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev)=>{
    ev.preventDefault()
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>

    </div>
  );
};

export default DefaultLayout;
