import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status">Loading users...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
