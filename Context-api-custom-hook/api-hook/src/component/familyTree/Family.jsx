import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "./familytree.css";
export const assetContext = createContext("");

const Family = () => {
  const asset = "dismond";
  const newAssets = "gold";
  return (
    <div className="divStyle">
      <h2>Family tree</h2>
      <assetContext.Provider value={newAssets}>
        <Grandpa asset={asset}></Grandpa>
      </assetContext.Provider>
    </div>
  );
};

export default Family;
