import React, { useState } from "react";

const Controllled = () => {
  const [password, setPassword] = useState("select");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
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
        {/* <input type="name" name="email" placeholder="Email" id="" required /> */}
        <input type="text" name="name" placeholder="name" />
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
        <input
          onChange={handleEmail}
          preventDefault={email}
          required
          type="email"
          name="email"
          placeholder="email"
          id=""
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
