import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_page_reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedict } from './../../hoc/withAuthRedict';
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 21839;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <div>
      <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(withAuthRedict, withRouter,
  connect(mapStateToProps, {getUserProfile})
  )(ProfileContainer)
