import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profile_page_reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedict } from './../../hoc/withAuthRedict';

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

let AuthRedirectComponent = withAuthRedict(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
