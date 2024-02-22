import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NameAndIndex() {
  return (
    <div>
      <h2>{`Name: NMNLN Bandara`}</h2>
      <h2>{`Index: ICT/21/813`}</h2>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>{`Counter App`}</h1>
      <NameAndIndex />
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
