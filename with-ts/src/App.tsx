import Button from './component/Button.tsx';
import Counter from './component/counter.tsx';
import User from './component/User.tsx';

const App = () => {
  return (
    <>
    <Counter />
      <User name="John Doe" age={30}/>
      <Button 
        label="Click Me"
        onClick={() => console.log("Button Clicked")}
        disabled={false}
      />
    </>
  )
}

export default App