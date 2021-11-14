import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Profile/News/News';
import Music from './components/Profile/Music/Music';
import Settings from './components/Profile/Settings/Settings';
import { Route } from 'react-router';


const App = (props) => {
  return (
    
      <div className='app-wrapper font-link'>
        <Header />
        <Navbar state={props.state.friendsPage}/>
        <div className='app-wrapper-content'>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path="/dialogs" 
          render={ () => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' 
          render={ () => <Profile state={props.state.profilePage}/>} />
       
        </div>
      </div>
    );
}

export default App;