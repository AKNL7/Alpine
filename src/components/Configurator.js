import React from 'react';
// import { useSelector } from 'react-redux';
import Color from './Color';
import Colors from './Colors';




const Configurator = () => {

  // const colors = useSelector((state) => state.configurator.color[0].legende);
  // console.log(colors[2].image);


  return (
    <>
      <section>
        <Colors />
   </section>
    </>
  );
}

export default Configurator;