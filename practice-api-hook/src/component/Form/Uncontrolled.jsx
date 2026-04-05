import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" ref={nameRef} id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
