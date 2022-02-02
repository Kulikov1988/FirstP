import React from 'react';
import './App.css';
import News from './components/Profile/News/News';
import Music from './components/Profile/Music/Music';
import Settings from './components/Profile/Settings/Settings';
import { Route } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';

const App = (props) => {
  
  return (
    <div className='app-wrapper font-link'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
        <Route path='/login'
          render={() => <LoginPage />} />  
      </div>
    </div>
  );
}

export default App;