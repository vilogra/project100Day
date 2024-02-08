import React, { useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User List</h1>
      <button onClick={getUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Get Users'}
      </button>

      {users.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: '10px' }}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
