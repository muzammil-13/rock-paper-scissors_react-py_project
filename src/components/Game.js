// Game.js

import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
    determineWinner(choice, choices[randomIndex]);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="button-container">
        <button onClick={() => handleChoice('rock')}>Rock</button>
        <button onClick={() => handleChoice('paper')}>Paper</button>
        <button onClick={() => handleChoice('scissors')}>Scissors</button>
      </div>
      <p>{result}</p>
    </div>
  );
};

export default Game;
