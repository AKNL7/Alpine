import React from "react";

// import Color from "./Color";
import Colors from "./Colors";
import Jantes from "./Jantes";
import Sellerie from "./Sellerie";
export const Configurator = () => {
  // const colors = useSelector((state) => state.configurator.color[0].legende);
  // console.log(colors[2].image);

  return (
    <>
      <section>
    
        <Colors />

        <Jantes />

        <Sellerie />
      </section>
    </>
  );
};
