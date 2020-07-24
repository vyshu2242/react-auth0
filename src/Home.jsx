import React from "react";
import { Link } from "react-router-dom";

const Home = ({ auth }) => {
  const { login, isAuthenticated } = auth;
  console.log("This is executed");
  return (
    <div>
      <h1>Home</h1>
      {isAuthenticated() ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Home;
