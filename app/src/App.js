import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './layout/Home';
import Sidebar from './layout/Sidebar/Sidebar';
import Navbar from './layout/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="grid-container">
          <Navbar />
          <main className="main">
            <Home />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
