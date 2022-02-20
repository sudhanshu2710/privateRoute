import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { Dashboard } from "./private-pages/Dashboard";
import { Settings } from "./private-pages/Settings";
export const PrivateRoute = () => {
  const cartCtx = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cartCtx.isAuth) {
      console.log(cartCtx.isAuth);
      // navigate("/login");
      console.log("navigated to login");
    }
  }, [cartCtx.isAuth]);
  const handle = () => {
    cartCtx.toggleAuth();
    navigate("/login");
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};
