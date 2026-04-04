import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Family";

const Aunty = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);
  const handleAdd = () => {
    setMoney(money + 500);
  };
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name="heba"></Cousin>
        <Cousin asset={asset} name="isa babu"></Cousin>
        <button onClick={handleAdd}>add</button>
      </section>
    </div>
  );
};

export default Aunty;
