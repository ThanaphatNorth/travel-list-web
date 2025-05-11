import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout">
      <Menu />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
