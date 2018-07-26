import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Search List</h1>
        </header>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
