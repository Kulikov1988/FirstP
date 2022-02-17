import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile , getStatus, updateStatus} from "../../redux/profile_page_reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedict } from './../../hoc/withAuthRedict';
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(withAuthRedict, withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
  )(ProfileContainer)
