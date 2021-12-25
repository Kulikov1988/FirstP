import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/Profile/News/News';
import Music from './components/Profile/Music/Music';
import Settings from './components/Profile/Settings/Settings';
import { Route } from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';


const App = (props) => {
  return (
    <div className='app-wrapper font-link'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path='/profile'
          render={() => <Profile />} />
      </div>
    </div>
  );
}

export default App;