// HostDashBoard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const HostDashBoard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you might want to clear the authentication token or session

    // After logout, navigate to the loginHost page
    navigate('/loginHost');
  };

  return (
    <div>
      {/* Your hostDashbord content */}
      <h1>Welcome to Host DashBoard</h1>
      <div>
        <a href='/host/dashboard/esportHost'>esportHost</a><br/>
        <a href='/host/dashboard/sportHost'>sportHost</a><br/>
        <a href='/host/dashboard/hackathonHost'>hackathonHost</a>
      </div>
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HostDashBoard;
