import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedict = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login/'/>

      return <Component {...this.props}/>
    }
  }
  
  let ConnetctedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnetctedAuthRedirectComponent;
}