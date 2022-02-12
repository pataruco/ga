'use strict';

const { useState } = React;

const Count = ({ count }) => {
  return <h2>Count: {count}</h2>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOnClickAdd = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleOnClickSubstract = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Counter</h1>
      {/* <h2>Count: {count}</h2> */}
      <Count count={count} />
      <menu className="buttons">
        <button type="button" onClick={handleOnClickAdd}>
          +
        </button>
        <button type="button" onClick={handleOnClickSubstract}>
          -
        </button>
      </menu>
    </div>
  );
};

const domContainer = document.querySelector('#root');
ReactDOM.render(<Counter />, domContainer);
