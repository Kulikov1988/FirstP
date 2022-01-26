import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users_reducer';
import Users from './Users';
import * as axios from "axios";
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);

    });
  } 
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(response.data.items)
    });
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
                            unFollow={this.props.unFollow}
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
    isFetchng: state.usersPage.isFetchng
  }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,}
  )(UsersContainer);
