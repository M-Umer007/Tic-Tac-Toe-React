"use client";

import React, { useState } from "react";

export const Boxes = () => {
  const [board, setBoard] = useState(Array(9).fill( {value: "" , disabled: false} ))
  const [turn,setTurn]=useState('X');

// Reset function to reset on click or when game is over i.e draw or winner
 function Reset(){
   setBoard(Array(9).fill( {value: null , disabled: false} ))
   setTurn(turn ==='X'?'O':'X')
 }
//  will invoke when the user click on the box or square whatever
  function handleClick(index: number) {
    // Check if the square is already filled
    // a new board will be created on everyHandleClick and it will iterate through the board and check if the index is equal to the square clicked ,
    // basically check if the square is already filled or not
    // if i === to the index of the clicked square and item not disabled which means if disable is false  then make the clicked value equal to the turn i.e('X' or 'O') and make the disable true so no one can change it later on
    const newBoard = board.map((item, i) =>i === index && !item.disabled? { value: turn, disabled: true }: item);
    // Update the state to the new index on the board 
    setBoard(newBoard);
    setTurn(turn ==='X'?'O':'X')
    console.log(newBoard); // checking if it is working
    // Check for a winner
    // iterating througn the new board and taking item values 
    // if found any matching pattern according to the calculateWinner function then make that one winner and reseting board
    const winner = calculateWinner(newBoard.map(item => item.value));
    if (winner) {
      alert(`Player ${winner} wins!`);
      Reset();
      return; // Stop once theres a winner
    }
    // if no one is a winner and every item is filled which means not null and has a value then draw
    else if (newBoard.every(item=>item.value) ){
      alert(`Its a draw`)
      Reset();
    }
    // use state that will change if the turn is X it will set it to O and if its O then its set to X
  }
  // function for checking the winner it returns nothing
  // squares:string[] means an array of strings
  function calculateWinner(squares:string[]){  //up here inside thesquare i will have X or O that is why it is string 
    // Array of winning combinations if any square becomes equal to it then it will be a winner
     const lines=[
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ]
    // copied but i will explain
    // iterating through lines which are 1 to 8 on every iterate it will increment 
    for (let i = 0; i < lines.length; i++) {
      // [array of a b and c ] they are index of the squares 
      // making [a,b,c] equal to the array of lines and iterting throgh [i]
      // like lines[0]=[0,1,2] and [a,b,c]=[0,1,2] 
      const [a,b,c] = lines[i];
    //in my case the square[a] which is either X or O is present 
    // and its value which is X or O is equal to b and is equal to c then return the value i.e X or O
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
<div className="flex flex-col justify-center items-center gap-20 my-auto">
  <div className="border-4 border-black  m-auto inline-block rounded-lg " >
    <div className="grid grid-cols-3 gap-2">
      {board.map((item, index) => (
        <div
          key={index}
          className="boxes flex h-[100px] w-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] border-4 border-slate-900 cursor-pointer justify-center items-center bg-slate-700 text-orange-300 rounded-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          onClick={() => handleClick(index)}>
          {item.value}
        </div>
      ))}
    </div>
  </div>
  <div className="my-auto" onClick={Reset}>
        <button className=" w-[100px] h-[50px] rounded-full bg-green-800 hover:bg-green-700">
          Reset
          </button>
      </div>
</div>
  );
};