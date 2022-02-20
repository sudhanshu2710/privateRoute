import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import style from "./Navbar.module.css";
export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <React.Fragment>
      <div className={style.container}>
        <div>Home</div>

        <button onClick={handleClick}>login</button>
      </div>
    </React.Fragment>
  );
};
