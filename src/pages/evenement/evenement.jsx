import React,{useState} from "react";
import "./Evenement.css";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navbar";

import 'primeicons/primeicons.css';
export const Evenement= () => {

  return (
    <div className="home">
      <div className="div">
      <NavBar  />  
      {/* <div className="lanternes" />   */}
     <div className="evenement">
        <div className="content-evenement">
            <div className="img-evenement">
            <img className="img_evenement" alt="image" src="https://picsum.photos/200" />
            </div>
            <div className="content-rigth">
            <div className="name-evenement">Evenement</div>
            <div className="club">Club</div>
            <div className="button">
            <Link to="/participation" className="btn-join-evenement">Participer</Link>
            </div>
            <div className="text-center text-xl">Description</div>
            <div className="description-evenement">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="datedebut">
            <i className="pi pi-calendar-clock" style={{ fontSize: "1rem" }}></i>
            &nbsp;Date de debut &nbsp;   =={'>'} &nbsp;
            <i className="pi pi-calendar-clock" style={{ fontSize: "1rem" }}></i>
            &nbsp;Date de fin
            </div>
            <div className="lieu">
            <i className="pi pi-map-marker" style={{ fontSize: "1rem" }}></i>
            &nbsp;Lieu
            </div>
            <div className="organisateurs">
            <i className="pi pi-users" style={{ fontSize: "1rem" }}></i>
            &nbsp;Organisateurs
            </div>
            <div className="participation">
            <i className="pi pi-users" style={{ fontSize: "1rem" }}></i>
            &nbsp;Participation
            </div>
           
            </div>

         </div>
      </div>
      </div>
      </div>
  );
};
