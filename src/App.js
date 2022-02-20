import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Private-Route/private-pages/Dashboard";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/Private-Route/PrivateRoute";
import AuthContext from "./store/AuthContext";
import AuthProvider from "./store/AuthProvider";
import { Settings } from "./components/Private-Route/private-pages/Settings";

function App() {
  const cartCtx = useContext(AuthContext);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashborad/*" element={<PrivateRoute />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
