import React ,{useState} from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [role, setRole] = useState("president");
  return (  
  <>
<div className="loginsss">
<div className="num">🔊 +216 123456789</div>
<ul>
  <li>
    <Link to="/register">Register</Link>
  </li>
  <li>
    <Link to="/login">Login</Link>
  </li>
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
  ):null}
    {role === "president" ? (
    <li>
      <Link to="/President" className="link">
        Dashboard
      </Link>
    </li>
  ):null}
</ul>
</div>
</>)
}
export default NavBar;