import React from "react";
import Myself from "./Myself";
import Brather from "./Brather";
import Sister from "./Sister";

const Dad = ({asset}) => {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <Myself asset={asset}></Myself>
        <Brather></Brather>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
