import React from 'react'
import logoWhite from "../Assets/images/sources-homepage/logo/logo-white.png";

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Modéle</a>
                </li>
                <li>
                  <a href="#">Configurateur</a>
                </li>
                
                <p>&copy; Copyright 2015</p>
              </ul>
              <div>
                <div className="logoFooter">
                  <img src={logoWhite} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer