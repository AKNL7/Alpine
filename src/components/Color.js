import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectColor, validItem } from "../components/features/configuratorSlice";

const Color = () => {
  const dispatch = useDispatch();

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const colors = useSelector((state) => state.configurator.color[0].legende);
//   console.log(colors[0].image);

  const colorChangeClick = (color) => {
    dispatch(selectColor(color));
    setSelectedImage(color.image);
    // console.log(color);
    setSelectedPrice(color.price);
    console.log(color.price);
  };

  const validateClick = (item) => {
    dispatch(validItem(item));
    setSelectedItems(item.price);
    console.log(item);
    console.log("valid");
  };

  return (
    <section id="color" className="px-8">
      <div className="selection_container flex ">
        <div className="flex flex-col items-center">
          {selectedImage && (
            <img
              className="w-50"
              src={selectedImage}
              alt={selectedImage.name}
            />
          )}
          {!selectedImage && (
            <img className="w-50" src={colors[2].image} alt="Default Blanc" />
          )}
          {/* <img className="w-50" src={colors[2].image} alt="blanc" /> */}
          {selectedPrice && <p className="text-5xl">{selectedPrice}</p>}
        </div>
        
        <div className="ChoiceSelection"></div>
        <div className= "ColorChoice flex flex-col">
          {colors.map((color, index) => (
            <button
              className="w-25"
              key={index}
              onClick={() => colorChangeClick(color)}
            >
              <img src={color.image} alt={color.name} />
            </button>
          ))}
        </div>
      </div>

      <div className="ValidateChoice">
        <button
          className="bg-slate-400 p-3 rounded"
          onClick={() => validateClick()}
        >
          Valider & Continuer
        </button>
      </div>

    </section>
  );
};

export default Color;
