import React from "react";
import headerVideo from "../assets/video/Alpine-Milan-HomePage-1680x951-950-non-possible-v3-12072021.mp4";
import videoCarousel from "../assets/video/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4";
import aLegend5 from "../assets/images/sources-homepage/A110/Alpine-A110-1.jpg";
import aPure5 from "../assets/images/sources-homepage/galerie/A110_PURE_6.jpg";

const Header = () => {

  return (
    
    <header>
      <form>
        <input type="radio" name="fancy" autoFocus value="clubs" id="clubs" />
        <input type="radio" name="fancy" value="hearts" id="hearts" />
        <input type="radio" name="fancy" value="spades" id="spades" />
        <input type="radio" name="fancy" value="diamonds" id="diamonds" />
        <label htmlFor="clubs">
          <video className="carouselVideo" src={headerVideo} controls autoPlay loop muted ></video>
        </label>
        <label htmlFor="hearts">
          <img src={aLegend5} alt="A110" />
        </label>
        <label htmlFor="spades">
          <img src={aPure5} alt="A110" />
        </label>
        <label htmlFor="diamonds">
          <video className="carouselVideo" src={ videoCarousel } controls alt="A110" />
        </label>

        <div className="keys">Use left and right keys to navigate</div>
      </form>
   </header>
  );
};
export default Header;
