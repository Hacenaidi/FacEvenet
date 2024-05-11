import React from "react";
// import { Container } from "primereact/container";
import { Menubar } from 'primereact/menubar';
// import { Button } from 'primereact/button';
// import { MenuItem } from 'primereact/menuitem';
import './footer.css';
export const Footer = () => {


  return (
    <footer className="footer px-0 px-lg-3">
        <p className="text-center">
          © {new Date().getFullYear()}{" "}
          <a href="">Creative Tim</a>, made with
          love for a better web
        </p>
    </footer>
  );
}
