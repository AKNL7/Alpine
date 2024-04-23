import React from "react";
import alpinePure from "../Assets/images/sources-homepage/versions/ALPINE-PURE-1.png";
import AlpinePureCompo from "../Assets/images/sources-homepage/versions/COMPO-PURE.png";
import alpineLegend from "../Assets/images/sources-homepage/versions/ALPINE-LEGENDE-1.png";
import AlpineLegendCompo from "../Assets/images/sources-homepage/versions/COMPO-LEGENDE.png";
import aPure1 from "../Assets/images/sources-homepage/galerie/A110_PE_1.jpg";
import aPure2 from "../Assets/images/sources-homepage/galerie/A110_PE_7.jpg";
import aPure3 from "../Assets/images/sources-homepage/galerie/A110_PE_9.jpg";
import aPure4 from "../Assets/images/sources-homepage/galerie/A110_PURE_4.jpg";
import aPure5 from "../Assets/images/sources-homepage/galerie/A110_PURE_6.jpg";
import aLegend1 from "../Assets/images/sources-homepage/galerie/A110_LEGENDE_1.jpg";
import aLegend2 from "../Assets/images/sources-homepage/galerie/A110_LEGENDE_5.jpg";
import aLegend4 from "../Assets/images/sources-homepage/galerie/A110_LEGENDE_9.jpg";
import aLegend5 from "../Assets/images/sources-homepage/A110/Alpine-A110-1.jpg";
import Legend from "../Assets/images/configurateur/modele/selection/legende.png";
import Pure from "../Assets/images/configurateur/modele/selection/pure.png";
import duoRight from "../Assets/images/sources-homepage/design/duo-right.jpg";
import duoLeft from "../Assets/images/sources-homepage/design/duo-left.jpg";
import visuelAlpine from "../Assets/images/sources-homepage/caractéristiques/dimensions-tech.png";

import { Link } from "react-router-dom";
import Header from "./Header";






const LandingPage = () => {
  return (
  <>
        <Header />
       
   
      <section className="alpine_pure">
        <div className="section_title">
          <h1>DECOUVRE NOS DERNIERS MODELES</h1>
        </div>

        <div className="gallery_container">
          <div className="gallery">
            <img src={alpinePure} alt="alpine" />
            <img src={AlpinePureCompo} alt="alpine" />
            <img src={aPure1} alt="alpine" />
            <img src={aPure2} alt="alpine" />
            <img src={aPure3} alt="alpine" />
            <img src={aPure4} alt="alpine" />
            <img src={aPure5} alt="alpine" />
          </div>
        </div>

        <div className="text_container_pure">
          <div className="text_pure">
            <h2>ALPINE PURE</h2>
            <h3>
              L'A110 est l'expression pure des sensations Alpine. Elle joue sur
              la route et ses courbes avec une étonnante agilité.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section className="alpine_Legend">
        <div className="gallery_container_legend">
          <div className="gallery">
            <img src={alpineLegend} alt="A110" />
            <img src={AlpineLegendCompo} alt=" A110" />
            <img src={aLegend1} alt="1110" />
            <img src={aLegend2} alt="legend" />
            <img src={alpineLegend} alt="legend" />
            <img src={aLegend4} alt="legend" />
            <img src={aLegend5} alt="legend" />
          </div>
        </div>
        <div className="text_container_legend">
          <div className="text_legend">
            <h2>ALPINE LEGEND</h2>
            <h3>
              L'A110 est l'expression pure des sensations Alpine. Elle joue sur
              la route et ses courbes avec une étonnante agilité.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
       
      <section className="configuratorCards">
        <div className="configurator_title">
          <h2>CONFIGURER VOTRE MODELE</h2>
          <h3>
            N'hesitez pas à utiliser notre configurateur pour personaliser votre
            modéle
          </h3>
        </div>
        <Link to="/configurator">
        <div className="card_container">
          <div className="card">
            <div className="wrapper">
              <img src={Pure} className="cover-image" alt="alpine" />
            </div>
            <h3 className="title">A110 Pure</h3>
            <img src={alpinePure} className="character" alt="alpine" />
            </div>
            </div>
     
        
      

          <div className="card">
            <div className="wrapper">
              <img
                src={Legend}
                className="cover-image"
                alt="alpine_configurator"
              />
            </div>
            <h3 className="title">A110 Legend</h3>

            <img
              src={alpineLegend}
              className="character"
              alt="alpine_configurator"
            />
          </div>
          </Link>
    
   
       
        
     </section>
     

      <section className="motor">

        <div className="motor_title">
          Au volant de l’A110, ressentez immédiatement cette sensation de ne
          faire qu’un avec la machine.
        </div>

        <div className="zoom ">
          <div className="container_motor">
            <div className=" p-2 m-2">
              <img className="motor_img" src={duoLeft} alt="motorone" />
            </div>
            <div className="p-2 m-2">
              <img className="motor_img" src={duoRight} alt="motortwo" />
            </div>
            <div className="p-2 m-2">
              <img className="motor_img" src={visuelAlpine} alt=" motorthree" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
