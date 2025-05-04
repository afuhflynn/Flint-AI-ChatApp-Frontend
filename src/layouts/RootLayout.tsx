import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";
import { Helmet } from "react-helmet";

const RootLayout: React.FC = () => {
  useEffect(() => {
    document.title = "Flint AI";
  }, []);
  return (
    <main className="flex flex-col justify-between w-full h-full">
      <Helmet>
        <title>Flint AI</title>
      </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
