import React from 'react';
import './App.css';
import travelapp from './travelapp.png';



function Travel() {
  return (
    <div class="MainTravel">
      <h1><a href="https://rongbangye.github.io/travel-app/" target="_blank">Travel App Demo</a></h1>
      <p>This project was created to help people access quick local weahter app and fav local resturant. <br />
        The application requires the user to input a city. That's it!</p>
      <a href="https://rongbangye.github.io/travel-app/" target="_blank"><img className="project-img" src={travelapp} alt="travel" /></a>
    </div>
  );
}

export default Travel;