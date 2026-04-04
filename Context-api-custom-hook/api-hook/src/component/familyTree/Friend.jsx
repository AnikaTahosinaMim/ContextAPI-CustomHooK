import React, { use } from "react";
import { MoneyContext } from "./Family";

const Friend = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h2>Friend:{money}</h2>
    </div>
  );
};

export default Friend;
