import React from "react";
import Cousin from "./Cousin";

const Aunty = ({asset}) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name="heba"></Cousin>
        <Cousin asset={asset} name="isa babu"></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
