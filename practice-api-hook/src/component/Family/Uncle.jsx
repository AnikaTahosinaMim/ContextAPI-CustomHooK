import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h2>uncle</h2>
      <section className="flex">
        <Cousin name="jom jom"></Cousin>
        <Cousin name="jom jom"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
