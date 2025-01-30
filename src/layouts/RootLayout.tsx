import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

const RootLayout: React.FC = () => {
  return (
    <main className="flex flex-col justify-between w-full h-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
