import React, { Component } from 'react';
import './App.css';

class Aggregate extends Component{
  render(){
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>Number and text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return (
      <div>
        <img />
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: "25%", display: "inline-block"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spotify App</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
