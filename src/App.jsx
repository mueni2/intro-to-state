import { useState } from 'react';
import './App.css';
//import Counter from './Counter';
//import Form from './Form';
import Counter2 from './Counter2';

const App = () => {
  const [name, setName] = useState(true);
  const [counter, setCounter] = useState(5);

  const reset = () => {
    setCounter(0);
  };

  console.log('rendered');

  const change = () => {
    setName(!name);
  };

  return (
    <main>
      <h1>Welcome to React</h1>
   {/*    <button onClick={change}>Change</button>
      <br />
      {name ? 'barry' : 'sally'}

      <Form counter={counter} />
      <Counter reset={reset} counter={counter} setCounter={setCounter} /> */}
      <Counter2 />
    </main>
  );
};

export default App;
