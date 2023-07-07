import { useState } from "react";
import * as userService from '../../utilities/users-utilities/users-service';
import './LogInForm.css';

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await userService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Please Try Again');
    }
  }

  const disable = !credentials.username || !credentials.password;

  return (
    <div>
      <div className="login-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="formSubmit" type="submit" disabled={disable}>SIGN IN</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}
