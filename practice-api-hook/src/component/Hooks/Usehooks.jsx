import React, { useState } from "react";

const Usehooks = (initialValue) => {
  const [input, setInput] = useState(initialValue);
  const handleInputButton = (e) => {
    setInput(e.target.value);
  };
  return [input, handleInputButton];
};

export default Usehooks;
