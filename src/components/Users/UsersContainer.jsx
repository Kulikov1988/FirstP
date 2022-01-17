import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from '../../redux/users_reducer';
   
let mapStateToProps = (state, a) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
      follow: (userId) => {
        dispatch(followAC(userId));
      },
      unfollow: (userId) => {
        dispatch(unFollowAC(userId));
      },
      setUsers: (users) => {
        dispatch(setUsersAC(users));
      },
      setCurrentPage: (PageNumber) => {
        dispatch(setCurrentPageAC(PageNumber));
      },
      setTotalUsersCount: (totalCount) => {
        dispatch(setTotalUsersCountAC(totalCount));
      },

  }
} 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;