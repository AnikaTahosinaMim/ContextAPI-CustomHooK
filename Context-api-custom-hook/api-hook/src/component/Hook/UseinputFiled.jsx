import React, { useState } from "react";

const UseinputFiled = (defaultValue) => {
  const [filedValue, setFiledvalue] = useState(defaultValue);
  const handleInputFiled = (e) => {
    setFiledvalue(e.target.value);
  };
  return [filedValue, handleInputFiled];
};

export default UseinputFiled;
