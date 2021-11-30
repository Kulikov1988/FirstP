import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./redux/state";
import * as serviceWorker from './serviceWorker';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
