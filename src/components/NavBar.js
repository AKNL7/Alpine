import { useState } from "react";
import React from "react";
import logoWhite from "../assets/images/sources-homepage/logo/logo-white.png";





const NavBar = () => {
 const [isContainerActive, setIsContainerActive] = useState(false);
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

    const responsive = () => {
        //Animate Links
        setIsContainerActive(true);
        if (setIsContainerActive === true) {
            navLinks.style.display = "active";
            
            };
          
               
            };
        

    console.log(isContainerActive);
        
         
        //Hamburger Animation
      
  
  
  
    return (
    <>
         <nav>
        <div className="logo">
            <img src={ logoWhite } alt="Logo"/>
        </div>
                <div className="hamburger" onClick={() => responsive(navLinks)}  >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                
                
                </div>
                    <div className={isContainerActive ? "test": ""}>
                    </div>
        <ul className="nav-links">
            <li><a href="">Accueil</a></li>
            <li><a href="">Modele</a></li>
            <li><a href="">Configurateur</a></li>
            <li><a href="">Contact Us</a></li>
            <li><button className="login-button" href="#">Login</button></li>
            <li><button className="join-button" href="#">Join</button></li>
        </ul>
          </nav >
          
       
        
    </>
  );
};

  
export default NavBar;
