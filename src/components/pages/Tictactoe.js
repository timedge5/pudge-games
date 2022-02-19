import React, { useState } from "react";

// base cell styles
const default_cell =
  "border-white flex justify-center items-center text-white text-6xl font-medium h-28 cursor-pointer";

export const Tictactoe = () => {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [showEnd, setShowEnd] = useState(false);
  const [message, setMessage] = useState("");
  const [moves, setMoves] = useState(1);

  //   handle cell click
  const handleClick = (val, i, j) => {
    if (board[i][j] === 0) {
      if (player === 1) {
        document.getElementById(val).innerText = "X";
        board[i][j] = 1;
        setMoves(moves + 1);
        setPlayer(0);
      } else {
        document.getElementById(val).innerText = "O";
        board[i][j] = -1;
        setMoves(moves + 1);
        setPlayer(1);
      }
    }
    checkWin(board[0][0], board[0][1], board[0][2]);
    checkWin(board[1][0], board[1][1], board[1][2]);
    checkWin(board[2][0], board[2][1], board[2][2]);
    checkWin(board[0][0], board[1][0], board[2][0]);
    checkWin(board[0][1], board[1][1], board[2][1]);
    checkWin(board[0][2], board[1][2], board[2][2]);
    checkWin(board[0][0], board[1][1], board[2][2]);
    checkWin(board[0][2], board[1][1], board[2][0]);
    if (moves === 9 && message === "") {
      setMessage("Looks like a tie!");
      setShowEnd(true);
    }
  };

  //   check if a row, col, or diagonal add up to 3 or -3 to indicate a win
  const checkWin = (a, b, c) => {
    if (a + b + c === 3) {
      setMessage("X wins! Play again?");
      setShowEnd(true);
      return;
    } else if (a + b + c === -3) {
      setMessage("O wins! Play again?");
      setShowEnd(true);
      return;
    } else {
      return;
    }
  };

  //   reset board and counters
  const handleReset = () => {
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    for (let i = 1; i < 10; i++) {
      document.getElementById(`div-${i}`).innerText = "";
    }
    setPlayer(1);
    setShowEnd(false);
    setMessage("");
    setMoves(1);
  };

  return (
    <div className="h-screen bg-slate-800">
      <div className="h-fit px-10 w-full grid grid-cols-3 md:w-1/2 md:mx-auto md:pt-20 lg:w-1/4">
        <div
          className={`h-screen absolute top-0 left-0 w-full bg-black/80 justify-center flex-col items-center ${
            showEnd ? "flex" : "hidden"
          }`}
        >
          <h1 className="text-4xl font-light uppercase px-4 py-10 bg-black text-white w-3/4 text-center mx-auto md:w-1/2 lg:w-1/4">
            {message}
          </h1>
          <button
            className="uppercase mt-5 font-light p-3 bg-white text-slate-900"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>
        <h1 className="font-thin uppercase text-4xl text-white text-center col-span-3 py-20">
          Tic Tac Toe
        </h1>
        <div
          id="div-1"
          className={`${default_cell} border-b border-r`}
          onClick={() => handleClick("div-1", 0, 0)}
        ></div>
        <div
          id="div-2"
          className={`${default_cell} border-b`}
          onClick={() => handleClick("div-2", 0, 1)}
        ></div>
        <div
          id="div-3"
          className={`${default_cell} border-b border-l`}
          onClick={() => handleClick("div-3", 0, 2)}
        ></div>
        <div
          id="div-4"
          className={`${default_cell} border-b border-r`}
          onClick={() => handleClick("div-4", 1, 0)}
        ></div>
        <div
          id="div-5"
          className={`${default_cell} border-b`}
          onClick={() => handleClick("div-5", 1, 1)}
        ></div>
        <div
          id="div-6"
          className={`${default_cell} border-b border-l`}
          onClick={() => handleClick("div-6", 1, 2)}
        ></div>
        <div
          id="div-7"
          className={`${default_cell} border-r`}
          onClick={() => handleClick("div-7", 2, 0)}
        ></div>
        <div
          id="div-8"
          className={`${default_cell}`}
          onClick={() => handleClick("div-8", 2, 1)}
        ></div>
        <div
          id="div-9"
          className={`${default_cell} border-l`}
          onClick={() => handleClick("div-9", 2, 2)}
        ></div>
      </div>
    </div>
  );
};
