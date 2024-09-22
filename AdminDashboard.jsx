// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);  // To store user data

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Making GET request to fetch all users from the backend
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);  // Store the response data in state
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        {/* Loop through the users array and display each user's details */}
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <div key={user._id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
              <h3>Name: {user.name}</h3>
              <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Social Media Handle: {user.socialHandle}</p>
              <div>
                {/* Loop through the user's images and display them as thumbnails */}
                {user.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/${image}`}  // Path to serve the image
                    alt={`Image uploaded by ${user.name}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
