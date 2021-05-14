import React from 'react'
import {Link} from 'react-router-dom';
import './NavbarHome.css';


function NavbarHome(props) {
    return (
        <div>
         <nav className="navbar navbar-fixed-top scrolling-navbar bar-mobi">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img width="200px" height="90px" src="images/kawo-legal-logo.png" alt="Kawolegal" className="logo"/></a>
              </div>
              
              <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right kl-nav">
                  <li className={props.homeactive}><Link to="/">Home</Link></li>
                  <li className={props.startupsactive}><Link to="/startups">Startups</Link></li>
                  <li className={props.registeractive}><Link to="register">Register</Link></li>
                  <li className={props.loginactive}><Link to="/login">Login</Link></li>
                  </ul>     
                </div>
            </div>
          </nav>
          </div>
        
    )
}

export default NavbarHome;
