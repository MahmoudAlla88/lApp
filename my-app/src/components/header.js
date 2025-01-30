import React from "react";
import { Link } from "react-router-dom";

function Header({ user, handleLogout }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/catalog">Book Catalog</Link></li>
        {!user ? <li><Link to="/signup">Sign Up</Link></li> : null}
      </ul>
      {user && (
        <div>
          <p>Welcome, {user.displayName || user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
