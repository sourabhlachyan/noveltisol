import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CountryCodePicker from 'react-country-code-picker';

function UserList() {
  const [users, setUsers] = useState([]);

  const handleGetUsers = () => {
    // Get the list of users from the backend
    const response = await fetch('/api/users');
    const data = await response.json();

    // Set the state of the users
    setUsers(data);
  };

  return (
    <div>
      <h1>Users List</h1>
      <Button onClick={handleGetUsers}>Get Users</Button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
