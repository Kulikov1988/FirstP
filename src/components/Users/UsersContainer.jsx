import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, 
    toggleFollowingProgress, getUsers} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    } 
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    }
  render() {
     return <> 
    { this.props.isFetchng ? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            selectedPage={this.props.selectedPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            followingInProgress={this.props.followingInProgress}

      />
    </> 
  }
}

let mapStateToProps = (state, a) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetchng: state.usersPage.isFetchng,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {follow, unfollow,  
  setCurrentPage, toggleFollowingProgress, getUsers}
  )(UsersContainer);
