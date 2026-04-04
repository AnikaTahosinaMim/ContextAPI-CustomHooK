import "./App.css";
import Controllled from "./component/Controllled";
import FormAction from "./component/FormAction";
import HookForm from "./component/Hook/HookForm";
import SimpleFrom from "./component/SimpleFrom";
import Uncontrolled from "./component/Uncontrolled";

function App() {
  return (
    <>
      <div>
        <h2>From</h2>
        {/* <SimpleFrom></SimpleFrom>
         */}
        {/* <FormAction></FormAction> */}
        {/* <Controllled></Controllled> */}

        {/* <Uncontrolled></Uncontrolled> */}
        <HookForm></HookForm>
      </div>
    </>
  );
}

export default App;
