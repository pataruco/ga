import React, { useState } from 'react';
import Board from './components/board';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  const [{ history, xIsNext }, set] = useState({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
    xIsNext: true,
  });

  const current = history[history.length - 1];

  const handleClick = (index) => {
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? 'X' : 'O';
    set({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !xIsNext,
    });
  };

  const winner = calculateWinner(current.squares);

  const moves = history.map((_step, move) => {
    const desc = move ? 'Move #' + move : 'Game start';
    return <li key={move}>{desc}</li>;
  });

  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <h1>Let's play a game!</h1>

      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(index) => handleClick(index)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default App;
