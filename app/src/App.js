import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './layout/Home';
import Sidebar from './layout/Sidebar/Sidebar';
import Navbar from './layout/Navbar/Navbar';
{/*<div className="App">*/}
{/*  <Sidebar />*/}
{/*  <div className="grid-container">*/}
{/*    <Navbar />*/}
{/*    <main className="main">*/}
{/*      <Home />*/}
{/*    </main>*/}
{/*  </div>*/}
{/*</div>*/}
class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
