import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { changeJantes } from "./features/alpineSlice";

//import Jantes Button images 
import jantesPureStandard from "../Assets/images/configurateur/jantes/selection/jante-standard.jpg";
import jantesPureSerac from "../Assets/images/configurateur/jantes/selection/jante-serac.jpg";


// Import Jantes Vues 
import JantesVuesStandard from "../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg";
import JantesVuesSerac from "../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg";



const Jantes = () => {
         
    const jantes = useSelector((state) => state.alpine);
    // console.log(jantes);
    const dispatch = useDispatch();

    const choiceJantes = (janteName, janteImage, jantePrice) => {
        dispatch(changeJantes({
            name: janteName,
            image: janteImage,
            price: jantePrice,
        }));
    };

   

       

  return (
    <>
      <div className="selectionPadJantes">
        <img src={ jantes.jantes.image } alt="white" />

        <div className="price">
          <p>{jantes.jantes.price}€</p>
          <p>{jantes.jantes.name}</p>
        </div>

        <div className="color-img-container">
          <img
            src={jantesPureStandard}
            alt="white"
            onClick={() => choiceJantes("STANDARD", JantesVuesStandard, 0)}
          />
          <img
            src={jantesPureSerac}
            alt="white"
            onClick={() => choiceJantes("SERAC", JantesVuesSerac, 1000)}
          />
        
        </div>
          </div>
          {/* Faire Link To Sellerie */}
      <div className="ValidateChoice">
        <button
          className="bg-slate-400 p-3 rounded"
          
        >
          Valider & Continuer
        </button>
      </div>
    </>
  );
}

export default Jantes