import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

const Friends = (props) => {
  let path = "/friend/" + props.id;

  return (
    <div className={s.friendData}>
      <NavLink to={path}>
        <img src={props.img} alt={''} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default Friends;
