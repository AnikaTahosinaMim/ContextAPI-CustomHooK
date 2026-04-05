import React from "react";

const Onsubmit = () => {
  const handleSUbmit = (e) => {
    e.preventDefault();
    const names = e.target.name.value;
    const emails = e.target.email.value;
    console.log("Name is :", names, "And Email is :",emails);
    e.target.reset()
  };
  return (
    <div>
      <form onSubmit={handleSUbmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="Email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Onsubmit;
