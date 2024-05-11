import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';

export const Header_president = () => {
  const location = useLocation();// Utilisation de useLocation pour obtenir l'URL actuelle
  
  return (
    <nav>
      <aside>
        <p> President </p>
        <Link to="/president" className={location.pathname === "/president" ? "active" : ""}> 
          <i className="pi pi-cog" aria-hidden="true"></i>
          Dashboard
        </Link>
        <Link to="./clubs_president" className={location.pathname === "/president/clubs_president" ? "active" : ""}>
          <i className="pi pi-building" style={{ fontSize: '1rem' }}></i>
          Club
        </Link>
        <Link to="./evenements_president" className={location.pathname === "/president/evenements_president" ? "active" : ""}>
          <i className="pi pi-clone" style={{ fontSize: '1rem' }}></i>
          Evenements
        </Link>
        <hr />
        <Link to="/logout"> 
          <i className="pi pi-sign-out" style={{ fontSize: '1rem' }}></i>
          Log out
        </Link>
      </aside>
    </nav>
  );
};
