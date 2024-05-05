import React from "react";
import "./Home.css";
import img from "../../assets/images/image.png";
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <div className="div">
      <div className="loginsss" >
        <div className="num">🔊 +216 123456789</div> 
        <ul>
        <li><Link to="/register" >Register</Link></li>
            <li><Link to="/login" >Login</Link></li>
        </ul>
        </div>
      <div className="navbar">
        <h1>FacEvent</h1>
        <ul>
            <li className="active">
                <Link to="/home" className="link"> Home</Link></li>
            <li>  <Link to="/clubs" className="link">Join Clubs</Link></li>
            <li>
            <Link to="/evenements" className="link">Evenements</Link></li>
        </ul>
        </div>       
         <div className="lanternes" />
         <div className="Titer">
          <div className="text-wrapper-2">Popular Events</div>
        </div>
        <div className="flex-row">
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
        </div>   
        
        <div className="Titer">
          <div className="text-wrapper-2">Upcoming Events</div>
        </div>
        <div className="flex-row">

        <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
               <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
