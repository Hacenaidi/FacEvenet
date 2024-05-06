import React from "react";
import "./Clubs.css";
import img from "../../assets/images/club.png";
import { Link } from "react-router-dom";
export const Clubs = () => {
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
         <div className="text-center text-xl">Clubs</div>
         <div className="list-clubs">
            <div className="best-club">
              <img className="img_club" alt="image" src={img} />
              <div className="nom-club">Club 1</div>
              <Link to={'/joinClub'}>
              <div className="btn-join-club">Join</div>
              </Link>
            </div>
            <div className="clubs">
                <div className="flex-row">

                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>
                <div className="card-clubs col">
                    <img className="img_club" alt="image" src={img} />
                    <div className="content">
                    <div className="nom-club">Club 2</div>
                    <Link to={'/joinClub'}>
                    <div className="btn-join-club">Join</div>
                    </Link>
                    </div>
                   
                </div>

                </div>
               
            </div>

         </div>
         </div>
      </div>
    </div>
  );
};
