import React from "react";
import Spcail from "./Spcail";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {name === "isa babu" && <Spcail asset={asset}></Spcail>}
      {name === "heba" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
