import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="App-nav">
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/Ravenous'>
                    <li>Ravenous List</li>
                </Link>
                <Link to='/Travel'>
                    <li>Travel</li>
                </Link>
                <Link to='/MiniGame'>
                    <li>Mini-Game</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;