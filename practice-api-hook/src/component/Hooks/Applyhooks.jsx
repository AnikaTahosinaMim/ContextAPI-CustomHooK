import React from "react";
import Usehooks from "./Usehooks";

const Applyhooks = () => {
  const [name, hanldeName] = Usehooks("");
  const [number, handleNumber] = Usehooks("");
  const [password, hanelePassword] = Usehooks("");
  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log({name,number,password})
  };
  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={name}
          onChange={hanldeName}
        />
        <input
          type="number"
          name="number"
          defaultValue={number}
          placeholder="numbers"
          onChange={handleNumber}
          id=""
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          defaultValue={password}
          onChange={hanelePassword}
          id=""
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Applyhooks;
