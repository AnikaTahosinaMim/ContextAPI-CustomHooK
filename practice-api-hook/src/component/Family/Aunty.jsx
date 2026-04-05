import React from "react";
import Cousin from "./Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty moni</h2>
      <section className="flex">
        <Cousin name="tom tom"></Cousin>
        <Cousin name="tom tom"></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
