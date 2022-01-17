import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from './profile_page_reducer';
import friendsReducer from './friends_page_reducer';
import usersReducer from "./users_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;