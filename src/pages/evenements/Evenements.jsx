import React from "react";
import "./Evenements.css";
import img from "../../assets/images/club.png";
import { Link } from "react-router-dom";
export const Evenements = () => {
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
            <li>
                <Link to="/home" className="link"> Home</Link></li>
            <li>  <Link to="/clubs" className="link">Clubs</Link></li>
            <li>
            <Link to="/evenements" className="link">Evenements</Link></li>
        </ul>
        </div>       
         <div className="lanternes" />
         <div className="content-clubs">
         <div className="text-center text-xl">Evenements</div>
         <div className="list-Evenements">
            {/* <div className="best-evenet">
              <img className="img_event" alt="image" src={img} />
              <div className="nom-event">Club 1</div>
              <Link to={'/joinEvent'}>
              <div className="btn-join-event">Join</div>
              </Link> */}

            <div className="evenets">
            <div className="flex-row">
            <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src={img} />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date">12-12-2022</div>
              <div className="location">Emphie 2</div>
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
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
              <div className="type-evenet">Public</div>
            </div>
            </Link>
          </div>
               
            </div>
</div>
         </div>
         </div>
      </div>
      </div>
  );
};
