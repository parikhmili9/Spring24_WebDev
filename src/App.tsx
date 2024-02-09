import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Web Devlopment Couse - Mili Parikh</h1>
        <a
          className="App-link"
          href="/labs/a1/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assignment 1
        </a>
        <a
          className="App-link"
          href="/labs/a2/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assignment 2
        </a>
        <a
          className="App-link"
          href="/Kanbas/Dashboard/screen.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kanbas project
        </a>
      </header>
    </div>
  );
}

export default App;
