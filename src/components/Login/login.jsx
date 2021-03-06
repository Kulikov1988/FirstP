import React from "react";
import { Field , reduxForm } from 'redux-form'
import { Input } from "../common/Preloader/FormsControls/formsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import style from "./../common/Preloader/FormsControls/formControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="Email" name="email" component={Input} type="text"
          validate={[required, maxLength30]}  />
        </div>
        <div>
          <Field placeholder="Password" name="password" component={Input} type="password" 
          validate={[required, maxLength30]} />
        </div>
        <div>
          <Field type={"checkbox"} name="rememberMe" component={Input}
           /> remember me
        </div>
       { props.error && <div className={style.formSummaryError}>
            {props.error}
        </div> }
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login); 