import React, { useContext } from "react";
import { assetContext } from "./Family";

const Spcail = ({ name, asset }) => {
  const newAssets = useContext(assetContext);
  console.log("klashfigk", newAssets);
  return (
    <div>
      <h2>Spcial : {name}</h2>
      <p>Assets : {asset}</p>
      <p>New asset : {newAssets}</p>
    </div>
  );
};

export default Spcail;
