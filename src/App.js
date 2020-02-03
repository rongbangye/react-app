import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Ravenous from './Ravenous';
import Travel from './Travel';
import MiniGame from './MiniGame';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Ravenous" component={Ravenous} />
          <Route path="/Travel" component={Travel} />
          <Route path="/MiniGame" component={MiniGame} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <section className="Main">
      <h1>My Web App Projects</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is a collection of multiple web apps or random functionality I put together to help solidfy <br /> my learning.</p>
    </section>
    <footer className="Footer">
      <p>
        © 2020|
          <a href="#" target="_blank">Code by Bryan Ye</a>
        |
          <a href="https://github.com/rongbangye?tab=repositories" target="_blank">Github</a>
      </p>
    </footer>
  </div>
);



export default App;
