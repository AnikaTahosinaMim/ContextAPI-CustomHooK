import React, { useContext } from "react";
import { AssetsContext } from "./FamilyTree";

const Spcial = () => {
  const newAssets = useContext(AssetsContext);

  return (
    <div>
      <h2>spcial onek</h2>
      <p>{newAssets}</p>
    </div>
  );
};

export default Spcial;
