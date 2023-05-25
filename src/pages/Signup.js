import React from 'react';
import {useState} from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await signup({ email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await login({ email, password });
    } catch (error) {
      setError(error.message);
    }
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await resetPassword(email);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={signupHandler}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign up</button>
      </form>
      <h3>Already have an account?</h3>
      <form onSubmit={loginHandler}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Log in</button>
      </form>
      <h3>Forgot your password?</h3>
      <form onSubmit={resetPasswordHandler}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Reset password</button>
      </form>
      {error && <p>{error}</p>}
    </div>

  );
}

export default Signup;

