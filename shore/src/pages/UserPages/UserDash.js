import React from 'react';
import { useNavigate } from 'react-router-dom';
import CommunityMessageBox from '../features/CommunityMessageBox';
function UserDash(){
    const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you might want to clear the authentication token or session

    // After logout, navigate to the loginHost page
    navigate('/login');
  };

  return (
    <div>
      {/* Your hostDashbord content */}
      <h1>Welcome to User DashBoard</h1>

      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
      <CommunityMessageBox/>
    </div>
  );
}

export default UserDash;