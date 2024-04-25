import React from 'react'; 
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from './features/alpineSlice';
import { Link } from "react-router-dom";

// color PURE  images
import pureBlanc from "../Assets/images/configurateur/couleurs/selection/blanc.jpg";
import pureBleu from "../Assets/images/configurateur/couleurs/selection/bleu.jpg";
import pureNoir from "../Assets/images/configurateur/couleurs/selection/noir.jpg";
import  BleuPure  from "../Assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg";
import WhitePure from "../Assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg";
import BlackPure from "../Assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg";
const Colors = () => {

    const colors = useSelector((state) => state.alpine);
    // console.log(colors);
    const dispatch = useDispatch();

  
    const ChoiceColor = (colorName, colorImage, colorPrice) => {
        dispatch(changeColor({
            name: colorName,
            image: colorImage,
            price : colorPrice, 
        }));
 
      
  }

  //  const validateClick = (item) => {
  //    dispatch(changeColor(item));
     
  //    console.log(item);
  //    console.log("valid");
  //  };
  
  
  
  
    return (
        <>
            <div className='selectionPad'>
             
        <img src={colors.color.image} alt="white" />

                 <div className='price'>
                    <p>{colors.color.price} €</p>
                    <p>{colors.color.name}</p>
                </div>

     <div className='color-img-container'>
        <img
          src={pureBlanc}
          alt="white"
          onClick={() => ChoiceColor("BLANC", WhitePure, 0)}
                    />
        <img
          src={pureBleu}
          alt="white"
          onClick={() => ChoiceColor("BLEU", BleuPure, 1000)}
        />
        <img
          src={pureNoir}
          alt="white"
          onClick={() => ChoiceColor("NOIR", BlackPure, 800)}
                    />
                </div>
        </div>

        <div className='ValidateChoice'>
          <Link to='/jantes'>
          <button
            className="bg-slate-400 p-3 rounded"
            // onClick={() => validateClick()}
          >
            Valider & Continuer
          </button>
            </Link>
        </div>
     
      </>
    );
}

export default Colors