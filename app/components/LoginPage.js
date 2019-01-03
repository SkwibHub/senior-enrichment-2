import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/userReducer.js';
import LoginComponent from './LoginComponent';
// import OauthLoginForm from './oauth-login-form'

const LoginPage = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <h1>Let's Loggin'!</h1>
      <div>
        <img src='/images/unaffiliated.png' className='bigLogo' />
        <div>
          <LoginComponent handleSubmit={handleSubmit} />
          {/*<OauthLoginForm />*/}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password })).then(() => {
        ownProps.history.push('/hero');
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
