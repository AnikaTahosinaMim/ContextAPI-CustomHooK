import React, { useState } from "react";

const Controllled = () => {
  const [password, setPassword] = useState("select");
  const [error, setError] = useState("");
  //   console.log(setPassword);
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("password length must be 6");
    } else {
      setError("");
    }
  };
  const handleControlled = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleControlled}>
        <input type="email" name="email" placeholder="Email" id="" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          id=""
          defaultValue={password}
          onChange={handlePassword}
          required
        />
        <br />
        <input type="submit" value="submite" />
      </form>
      <p>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default Controllled;
