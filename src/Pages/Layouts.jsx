import React from "react";
import { Link, Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Header";
import "../assets/style/pages.css";
function Layouts() {
  return (
    <div>
      <nav>
        <ResponsiveAppBar />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layouts;
