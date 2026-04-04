import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familytree.css";
export const assetContext = createContext("");
export const MoneyContext = createContext(0);

const Family = () => {
  const [money, setMoney] = useState(0);
  const asset = "dismond";
  const newAssets = "gold";
  return (
    <div className="divStyle">
      <h2>Family tree</h2>
      <h2>Total fimy money {money}</h2>
      <MoneyContext value={[money,setMoney]}>
        <assetContext.Provider value={newAssets}>
          <Grandpa asset={asset}></Grandpa>
        </assetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default Family;
