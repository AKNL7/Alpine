import React from 'react';
import { useSelector } from'react-redux';




const Configurator = () => {

  const colors = useSelector((state) => state.configurator.color[0].legende);
  console.log(colors[0].image);


  return (
    <>
      {/* <section>
        <img src={[1].image} alt="blanc" />
      </section> */}
    </>
  );
}

export default Configurator;