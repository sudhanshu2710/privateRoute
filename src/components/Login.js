import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

export const Login = () => {
  const cartCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const handle = () => {
    cartCtx.toggleAuth();
    navigate("/dashborad");
  };
  return (
    <div>
      <button onClick={handle}>{!cartCtx.isAuth ? "login" : "logout"}</button>
    </div>
  );
};
