import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_page_reducer";
import friendsReducer from "./friends_page_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;