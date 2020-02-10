import React from 'react';
import './App.css';
import recipe from './recipe.png';


function Recipe () {
  return (
    <div className="MainRavenous">
        <h1><a href="https://optimistic-wing-67191c.netlify.com/" target="_blank">Recipe App Demo</a></h1>
        <p>For people who love to cook and find recipe, fetch recipe data from Edamam</p>
        <a href="https://optimistic-wing-67191c.netlify.com/" target="_blank"><img className="project-img" src={recipe}></img></a>
        
    </div>
  );
}

export default Recipe;
