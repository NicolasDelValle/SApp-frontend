import React from "react";
import { NavBar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="m-2">
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
