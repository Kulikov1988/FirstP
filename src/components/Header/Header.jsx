import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/4c1f1384533141.5d5fa79310f29.gif' alt="" />
                    <div className={s.loginBlock}>
                        {props.isAuth 
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                        : <NavLink to={'/login'}>Login </NavLink>} 
                    </div>
         </header>
}

export default Header;