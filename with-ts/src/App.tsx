/* import Button from "./component/Button.tsx";
import Counter from "./component/counter.tsx";
import Todo from "./component/Todo.tsx";
import User from "./component/User.tsx"; */
import Counter from "./component/counter.tsx";

import Form from "./component/Form";

const App = () => {
  return (
    <>
      <Counter />
      {/* <Counter />
      <User name="John Doe" age={30} />
      <Button
        label="Click Me"
        onClick={() => console.log("Button Clicked")}
        disabled={false}
      />
      <Todo /> */}
      <Form />
    </>
  );
};

export default App;
