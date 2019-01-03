import React from 'react';

const LoginComponent = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label htmlFor='email'>Password</label>
          <input type='password' name='password' />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
