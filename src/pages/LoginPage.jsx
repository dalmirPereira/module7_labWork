//--------------- Module 7 - Lab Work Ex4 ----------------------


//--------------mock users data -----------------------
const users = [
    {
        name: "User1",
        password: "password1"
    },
    {
        name: "User2",
        password: "password2"
    }
]
//--------------------------------------------------------

import React, { useState } from 'react';
import { useAuthContext } from "../contex/AuthenticationContex/AuthContext";
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { handleIsAuthenticated } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name) {
      setError('Name is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    const userFound = users.find(
      (user) => user.name === name && user.password === password
    );

    if (!userFound) {
      setError('User does not exist or wrong password.');
      return;
    }

    handleIsAuthenticated(name);
    alert('Login successful!');
    navigate('/dash');
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;