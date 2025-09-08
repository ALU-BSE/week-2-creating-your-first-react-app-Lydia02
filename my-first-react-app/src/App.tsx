import React, { useState } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent title="Hello from MyComponent!" />
      <div style={{ marginTop: '2rem' }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '1rem' }}>Decrement</button>
      </div>
    </div>
  );
}

export default App;