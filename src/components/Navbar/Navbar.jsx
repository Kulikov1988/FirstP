import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
console.log(s);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.friend}>
        Friends
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFrjdjrgOA0ozkgA6y7FwCw830fuJoccPjQ&usqp=CAU"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFrjdjrgOA0ozkgA6y7FwCw830fuJoccPjQ&usqp=CAU"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFrjdjrgOA0ozkgA6y7FwCw830fuJoccPjQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className={s.friend}>
          <span>Dima </span>
          <span>Sasha </span>
          <span>Petya </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
