import React from 'react';

const OauthLoginComponent = props => {
  return (
    <form method='get' action='/auth/google'>
      <button type='submit' className='loginButton'>
        Login with Google
      </button>
    </form>
  );
};

export default OauthLoginComponent;
