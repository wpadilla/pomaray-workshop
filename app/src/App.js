import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home/Home';
import Sidebar from './screens/Home/Sidebar/Sidebar';
import Navbar from './screens/Home/Navbar/Navbar';

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
