import React, { useState } from "react";

const Controlled = () => {
  //   const [names, setNames] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   const handleNames = (e) => {
  //     console.log(e.target);
  //     setNames(e.target.value);
  //   };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 5) {
      setError("password must be 6 character or longer");
    }
    else{
        setError("")
    }
  };
  const handleControlled = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleControlled}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input
          type="password"
          defaultValue={password}
          onChange={handlePassword}
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>
        <br />
        <small>{password}</small>
        <br />
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
};

export default Controlled;
