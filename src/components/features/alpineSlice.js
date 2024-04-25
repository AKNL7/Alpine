import { createSlice } from "@reduxjs/toolkit";

// import image couleurs 
import WhitePure from "../../Assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg";

//import Jantes
import StandardJantes from "../../Assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg"

const initialState = {
    version: "pure",
    price: 54700,
    color: {
        name: "white", 
        image: WhitePure, 
        price : 0
    },

    jantes: {
        name: "StandardJantes", 
        image: StandardJantes,
        price: 0, 
       
    }
  
};

export const alpineSlice = createSlice({
    name: "alpine",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            // console.log(action.payload);
            state.color.name = action.payload.name;
            state.color.image = action.payload.image;
            state.color.price = action.payload.price;
        },
        changeJantes: (state, action) => {
            console.log(action.payload);
            state.jantes.name = action.payload.name;
            state.jantes.price = action.payload.price;
            state.jantes.image = action.payload.image;
          
      
   
        },
    }
});
// Action creators are generated for each case reducer function
export const { changeColor, changeJantes } = alpineSlice.actions;

export default alpineSlice.reducer;
