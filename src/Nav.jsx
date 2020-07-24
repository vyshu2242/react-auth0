import React from "react";
import { Link } from "react-router-dom";

function Nav({ auth }) {
  const { isAuthenticated, login, logout, userHasScopes } = auth;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/public">Public</Link>
        </li>
        {isAuthenticated() ? (
          <li>
            <Link to="/private">Private</Link>
          </li>
        ) : null}
        {isAuthenticated() && userHasScopes(["read:courses"]) ? (
          <li>
            <Link to="/course">Course</Link>
          </li>
        ) : null}
        <li>
          <button onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
