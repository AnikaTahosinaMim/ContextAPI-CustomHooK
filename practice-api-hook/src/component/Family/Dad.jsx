import React from "react";
import Brother from "./Brother";
import Sister from "./Sister";
import Myself from "./Myself";

const Dad = () => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
