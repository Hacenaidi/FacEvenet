import React,{useState} from "react";
import "./Evenements.css";
import img from "../../assets/images/club.png";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navbar";

import 'primeicons/primeicons.css';
export const Evenements = () => {

  return (
    <div className="home">
      <div className="div">
      <NavBar  />    
         <div className="lanternes" />
         <div className="content-clubs">
         <div className="text-center text-xl">Evenements</div>
         <div className="list-Evenements">
            <div className="evenets">
            <div className="flex-row">
            <div className="col">
            <Link className="link-card" to="/evenement/{id}">
            <img className="img_event" alt="image" src="https://picsum.photos/200" />
            <div className="content">
              <div className="titer-clubs">IEEE</div>
              <div className="date"><i className=" pi pi-calendar-clock" style={{ fontSize: '1rem' }}></i>&nbsp;12-12-2022</div>
              <div className="location"><i className=" pi pi-map" style={{ fontSize: '1.2rem' }}></i>&nbsp;Emphie 2</div>
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
