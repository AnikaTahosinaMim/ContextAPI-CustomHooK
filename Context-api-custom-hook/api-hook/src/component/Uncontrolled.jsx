import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
          id=""
        />{" "}
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          id=""
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
