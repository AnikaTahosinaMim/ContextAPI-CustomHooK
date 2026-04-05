import React, { useContext } from "react";
import { AssetsContext } from "./FamilyTree";

const Cousin = ({ name }) => {
  const newAssests = useContext(AssetsContext);
  return (
    <div>
      <h2>{name}</h2>
      <p>{newAssests}</p>
    </div>
  );
};

export default Cousin;
