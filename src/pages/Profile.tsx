import React, { useState } from 'react';
import { UserProfile } from '../components/UserProfile';

export const Profile: React.FC = () => {
  // TODO: Replace with actual user data from your authentication system
  const [profileData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate about learning and growing in the tech industry",
    dateOfBirth: "1990-01-01",
    contact: "+1234567890",
    fieldOfInterest: "Software Development"
  });

  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit profile clicked");
  };

  return (
    <UserProfile
      profileData={profileData}
      onEdit={handleEdit}
    />
  );
};

export default Profile;