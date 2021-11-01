import React from "react";
import s from "./Img.module.css";
import { Avatar, fullname, username } from "react-lorem-ipsum";

const Img = (props) => {
  return (
    <div className={s.item}>
      <div className="user">
        <Avatar gender="female" />
        <div className="fullname">{fullname("female")}</div>
        <div className="username">{`@${username()}`}</div>
      </div>
    </div>
  );
};

export default Img;
