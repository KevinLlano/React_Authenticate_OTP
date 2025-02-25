import { Outlet } from "react-router"; // Outlet is used to render nested routes
import React from "react";
import { CustomNav } from "./components"; // Import a custom navigation component from Flowbite

const Layout = () => {
  return (
    <div>
      {/* Navigation container with padding and centered content */}
      <div className="container pt-10 mx-auto">
        <CustomNav /> {/* Render the custom navigation bar */}
      </div>

      {/* Outlet component renders the child components based on the route */}
      <Outlet />
    </div>
  );
};

export default Layout;
