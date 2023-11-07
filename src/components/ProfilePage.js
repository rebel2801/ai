import React from 'react';
import './ProfilePage.css';


function ProfilePage({ name, weight }) {
  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img src="profile.png" alt="Profile" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Weight: {weight} lbs</p>
      </div>
    </div>
  );
}

export default ProfilePage;
