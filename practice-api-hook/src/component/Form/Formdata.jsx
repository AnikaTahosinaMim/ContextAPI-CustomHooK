import React from "react";

const Formdata = () => {
  const handleFormData = (formdata) => {
    console.log(formdata.get("name"));
    console.log(formdata.get("email"));

  };
  return (
    <div>
      <form action={handleFormData}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="Email" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Formdata;
