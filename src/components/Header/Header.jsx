import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/4c1f1384533141.5d5fa79310f29.gif' alt="" />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>} 
        </div>
    </header>
}

export default Header;