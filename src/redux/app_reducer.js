import { getAuthUserData } from './auth_reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
  
};

const appReducer = (state = initialState, action) => {
   
  switch (action.type) {
    case INITIALIZED_SUCCESS :
    return {
      ...state, 
      initialized: true
    }
       default:
      return state;
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS,})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
  });
}

// export const login = (email, password, rememberMe) => (dispatch) => {
//   authAPI.login(email, password, rememberMe).then(response => {
//     if (response.data.resultCode === 0) {
//       dispatch(getAuthUserData());
//     } else {
//       let message = response.data.messages.length > 0 ? response.data.messages[0] : "Somer error"
//       dispatch(stopSubmit("login", {_error: message}));
//     }
//   });
// }

// export const logout = () => (dispatch) => {
//   authAPI.logout().then(response => {
//     if (response.data.resultCode === 0) {
//       dispatch(setAuthUserData(null, null, null, true));    }
//   });
// }

export default appReducer;