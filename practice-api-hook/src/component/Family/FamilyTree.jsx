import React, { createContext } from "react";
import Grandpa from "./Grandpa";
export const AssetsContext = createContext("");

const FamilyTree = () => {
  const assets = "dimond";
  return (
    <div className="grandpa">
      <h2>Family tree</h2>
      <AssetsContext.Provider value={assets}>
        <Grandpa></Grandpa>
      </AssetsContext.Provider>
    </div>
  );
};

export default FamilyTree;
