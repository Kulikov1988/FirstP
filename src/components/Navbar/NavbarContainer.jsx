import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import Friends from "./Friends";
import StoreContext from "../../StoreContent";
console.log(s);

const NavbarContainer = () => {
  return (
    <StoreContext>
      {(store) => {
        let state = store.getState().friendsPage;

        let friendsData = state.friendsData.map((fData) => (
          <Friends name={fData.name} id={fData.id} img={fData.img} />
        ));

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
            <div className={s.friend}>{friendsData}</div>
          </nav>
        );
      }}
    </StoreContext>
  );
};

export default NavbarContainer;
