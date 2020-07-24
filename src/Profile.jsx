import React, { useState, useEffect } from "react";

const Profile = ({ auth }) => {
  const [profile, setProfile] = useState({});
  const [err, setError] = useState({});

  useEffect(() => {
    auth.getUserProfile((profile, err) => {
      setProfile(profile);
      setError(err);
    });
  });

  if (!profile) return null;
  return (
    <>
      <h1>Profile</h1>
      <p>{profile.name}</p>
      <img
        src={profile.picture}
        style={{ maxWidth: 50, maxHeight: 50 }}
        alt="profile pic"
      />
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </>
  );
};

export default Profile;
