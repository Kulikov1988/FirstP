import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetchng: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
   
  switch (action.type) {
    case FOLLOW :
    return {
      ...state, 
      users: state.users.map( u => {
        if (u.id === action.userId) { 
          return {...u, followed: true}
        }
        return u;
      })
    }
  
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS : {
    return {
      ...state, users: action.users }
    }  
    case SET_CURRENT_PAGE : {
      return {
         ...state, currentPage: action.currentPage} 
        }
    case SET_TOTAL_USERS_COUNT : {
      return {
          ...state, totalUsersCount: action.totalUsersCount} 
          }
    case TOGGLE_IS_FETCHING : {
      return {
        ...state, isFetchng: action.isFetchng}
    }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS : {
      return {
        ...state, 
        followingInProgress: action.isFetchng
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId)
      }
        
    }
       default:
      return state;
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetchng) => ({type: TOGGLE_IS_FETCHING, isFetchng})
export const toggleFollowingProgress = (isFetchng, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetchng, userId})

export const requestUsers = (page,pageSize) =>{
    return (dispatch) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page,pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }  
}

export const follow = (UserId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,UserId));
    usersAPI.follow(UserId).then((response) => {
          if (response.data.resultCode === 0) {
          dispatch(followSuccess(UserId));
        }
        dispatch(toggleFollowingProgress(false, UserId));   
      }); 
  }   
}

export const unfollow = (UserId) =>{
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,UserId));
    usersAPI.unfollow(UserId).then((response) => {
          if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(UserId));
        }
        dispatch(toggleFollowingProgress(false, UserId));   
      }); 
  }  
}

export default usersReducer;