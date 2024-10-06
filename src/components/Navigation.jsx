import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const userEmail = localStorage.getItem("userEmail");
      setIsLoggedIn(!!userEmail);
    };

    // Check initial login status
    checkLoginStatus();

    // Add event listener for storage changes
    window.addEventListener("storage", checkLoginStatus);

    // Cleanup
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  return (
    <nav className="todo-app__navigation">
      <ul className="todo-app__navigation-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
