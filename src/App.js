import React, { Component } from 'react'
import './App.css'

let fakeServerData = {
  user: {
      name: "Rick",
      playlists: [
        {
          name: "My Favorites",
          songs: ["Beat it", "Billie Jean", "Thriller", "Candle in the Wind"]
        },
        {
          name: "Some Bangers",
          songs: ["I dont know", "this is just fake data", "Spurious", "Shady"]
        },
        {
          name: "Just Fake Playlists",
          songs: ["I'm still doing it", "Fiction", "Non-Fact", "Fake News!!"]
        },
        {
          name: "Last Playlist",
          songs: ["I've had enough", "Of all this fake data", "test-data", "faked from server"]
        }
      ]
  }
}

class Aggregate extends Component{
  render(){
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2># Playlists: {this.props.playlists && this.props.playlists.length}</h2>
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
  constructor(){
    super()
    this.state = {serverData: {}}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      });
    }, 1000)
  }
  //

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.serverData.user && 
            this.state.serverData.user.name}'s Playlists
        </h1>
        <Aggregate playlists={this.state.serverData.user && 
                              this.state.serverData.user.name} />
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
