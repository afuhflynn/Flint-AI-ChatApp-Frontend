import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  useEffect(() => {
    document.title = "Auth | Flint AI";
  }, []);
  return <Outlet />;
};

export default AuthLayout;
