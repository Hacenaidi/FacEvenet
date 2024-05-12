import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [role, setRole] = useState("president");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Nouvelle variable d'état pour suivre l'état de connexion

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    // Mettre à jour l'état de connexion pour indiquer que l'utilisateur est déconnecté
    setIsLoggedIn(false);
    // Vous pouvez également ajouter ici d'autres actions de déconnexion, comme vider les informations de l'utilisateur dans le stockage local, etc.
  };

  return (
    <>
      <div className="loginsss">
        <div className="num">🔊 +216 56 725 104</div>
        <ul>
          {/* Condition pour afficher "Log out" si l'utilisateur est connecté */}
          {isLoggedIn ? (
            <li>
              <a onClick={handleLogout}>Log out</a>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar">
        <h1>FacEvent</h1>
        <ul>
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/clubs" className="link">
              Clubs
            </Link>
          </li>
          <li>
            <Link to="/evenements" className="link">
              Evenements
            </Link>
          </li>
          {role === "admin" ? (
            <li>
              <Link to="/admin" className="link">
                Dashboard
              </Link>
            </li>
          ) : null}
          {role === "president" ? (
            <li>
              <Link to="/President" className="link">
                Dashboard
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
