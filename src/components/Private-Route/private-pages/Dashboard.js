import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AuthContext from "../../../store/AuthContext";
import { Settings } from "./Settings";
export const Dashboard = () => {
  const cartCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const handle = () => {
    cartCtx.toggleAuth();
    navigate(`/login`);
  };

  return (
    <React.Fragment>
      <div>dashboard--</div>
      <div>
        <Link to="/dashborad/setting">Settings</Link>
      </div>
      <div>
        <button onClick={handle}>{"logout"}</button>
      </div>
      <Outlet />
    </React.Fragment>
  );
};
