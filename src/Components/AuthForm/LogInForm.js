import { useState } from "react";
import * as userService from '../../utilities/users-utilities/users-service'

export default function LogInForm ({setUser}) {

    const [credentials, setCredentials] = useState ({
        username: '',
        password: ''
    });


    const [error, setError] = useState('');


    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
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


    return (

        <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
           
            <label>Username</label>
            <input type="username" name="username" value={credentials.username} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>   


    );


}