import React from "react";
import Spcail from "./Spcail";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {name === "isa babu" && <Spcail asset={asset}></Spcail>}
    </div>
  );
};

export default Cousin;
