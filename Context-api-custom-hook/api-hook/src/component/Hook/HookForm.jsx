import UseinputFiled from "./UseinputFiled";

const HookForm = () => {
  const [name, nameOnchnage] = UseinputFiled("");
  const [email, emailOnchange] = UseinputFiled("");
  const [number, numberOnchnage] = UseinputFiled("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email,number);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          defaultValue={name}
          onChange={nameOnchnage}
          placeholder="name"
          type="text"
        />
        <input type="submit" value="submit" />
        <br />
        <input
          type="email"
          onChange={emailOnchange}
          placeholder="email"
          name="email"
          id=""
        />
        <br />
        <input
          onChange={numberOnchnage}
          type="number"
          placeholder="number"
          name="number"
          id=""
        />
      </form>
    </div>
  );
};

export default HookForm;
