import React from 'react';
import './App.css';
import minigame from './minigame.png'

function MiniGame () {
  return (
    <div class="MainMiniGame">
        <h1><a href="https://rongbangye.github.io/memory-game/" target="_blank">MiniGame App Demo</a></h1>
        <p>The memory game is a basic matching game to test out the player’s memory. <br />
        Build gameboard with HTML and Styled it with CSS  <br />
        Handling matched and unmatched cards</p>
        <a href="https://rongbangye.github.io/memory-game/" target="_blank"><img className="project-img" src={minigame} alt="minigame" /></a>
        
    </div>
  );
}

export default MiniGame;
