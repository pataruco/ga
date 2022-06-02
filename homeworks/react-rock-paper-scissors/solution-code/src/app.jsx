import React, { useState } from 'react';

const intialState = {
  playerChoice: '',
  compChoice: '',
  result: '',
};

const choices = ['rock', 'paper', 'scissors'];

const getResult = (playerChoice, compChoice) => {
  let result;

  switch (true) {
    case playerChoice === compChoice:
      result = 'draw';
      break;
    case playerChoice === 'rock' && compChoice === 'scissors':
    case playerChoice === 'scissors' && compChoice === 'paper':
    case playerChoice === 'paper' && compChoice === 'rock':
      result = 'You Win';
      break;
    default:
      result = 'You Lost';
      break;
  }
  return result;
};

const App = () => {
  const [{ playerChoice, compChoice, result }, set] = useState(intialState);

  const handleOnClickPlay = (event) => {
    const {
      target: { value: playerChoice },
    } = event;

    const compChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, compChoice);

    set({ playerChoice, compChoice, result });
  };

  const handleOnClickReset = (event) => {
    set(intialState);
  };

  return (
    <div className="game">
      <p>
        Player chose: <span className="player1">{playerChoice}</span>
      </p>
      <p>
        Computer chose: <span className="player2">{compChoice}</span>
      </p>
      <p className="result">{result}</p>
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={handleOnClickPlay}
          value={choice}
          className="choice"
        >
          {choice}
        </button>
      ))}

      <button className="reset" onClick={handleOnClickReset}>
        reset
      </button>
    </div>
  );
};

export default App;
