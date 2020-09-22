import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const callAPI = () => {
    fetch("http://localhost:3002/api")
      .then(res => res.text())
      .then(res => setApiRes(res))
  }

  useEffect(() => {
    callAPI();
    console.log('sup');
  }, [])
  const [apiRes, setApiRes] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiRes}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
