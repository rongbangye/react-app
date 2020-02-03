import React from 'react';
import './App.css';
import ravenous from './ravenousApp.png';


function Ravenous () {
  return (
    <div className="MainRavenous">
        <h1><a href="https://rongbangye.github.io/ravenous/" target="_blank">Ravenous App Demo</a></h1>
        <p>This application is easier for user who want to find local resturant filter by either Best Match/Highest Rate/Most Reviewed.</p>
        <img src={ravenous}></img>
    </div>
  );
}

export default Ravenous;
