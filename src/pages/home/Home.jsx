import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import "./Home.css";
import img from "../../assets/images/image.png";


export const Home = () => {
  
  return (
    <div className="home">
      <div className="div">
        <NavBar/>
        <div className="lanternes" />
        <div className="Titer">
          <div className="text-wrapper-2">Popular Events</div>
        </div>
        <div className="flex-row">
          <div className="col">
            <Link className="link-card" to="/evenement/{id}">
              <img className="img_event" alt="image" src="https://picsum.photos/200" />
              <div className="content">
                <div className="titer-clubs">IEEE</div>
                <div className="date">
                  <i className=" pi pi-calendar-clock" style={{ fontSize: '1rem' }}></i>&nbsp;12-12-2022
                </div>
                <div className="location">
                  <i className=" pi pi-map" style={{ fontSize: '1.2rem' }}></i>&nbsp;Emphie 2
                </div>
                <div className="type-evenet">Public</div>
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
              <img className="img_event" alt="image" src="https://picsum.photos/200"/>
              <div className="content">
                <div className="titer-clubs">IEEE</div>
                <div className="date">
                  <i className=" pi pi-calendar-clock" style={{ fontSize: '1rem' }}></i>&nbsp;12-12-2022
                </div>
                <div className="location">
                  <i className=" pi pi-map" style={{ fontSize: '1.2rem' }}></i>&nbsp;Emphie 2
                </div>
                <div className="type-evenet">Public</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
