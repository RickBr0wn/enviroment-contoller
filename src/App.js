import React, { Component } from 'react'
import './App.css'

let fakeServerData = {
  user: {
      name: "Rick",
      playlists: [
        {
          name: "My Favorites",
          songs: [
            {name: "Beat it", duration: 1345},
            {name: "Billie Jean", duration: 1568},
            {name: "Thriller", duration: 1659},
            {name: "Candle in the Wind", duration: 1784}
          ]
        },
        {
          name: "Some Bangers",
          songs: [
            {name: "I dont know", duration: 2012},
            {name: "this is just fake data", duration: 1458},
            {name: "Spurious", duration: 1986},
            {name: "Shady", duration: 1457}
          ]
        },
        {
          name: "Just Fake Playlists",
          songs: [
            {name: "I'm still doing it", duration: 1659},
            {name: "Fiction", duration: 1423},
            {name: "Non-Fact", duration: 1785},
            {name: "Fake News!!", duration: 1323}
          ]
        },
        {
          name: "Last Playlist",
          songs: [
            {name: "I've had enough", duration: 1235},
            {name: "Of all this fake data", duration: 1458},
            {name: "test-data", duration: 1455},
            {name: "faked from server", duration: 1475}
          ]
        }
      ]
  }
}

class PlayListCounter extends Component{
  render(){
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>{Math.round((totalDuration/60)/60)} Hours</h2>
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
        {this.state.serverData.user ?
        <div>
          <h1>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlayListCounter playlists={this.state.serverData.user.playlists} />
          <HoursCounter playlists={this.state.serverData.user.playlists} />

          <Filter />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div> : <h1>Loading..</h1>
        }
      </div>
    );
  }
}

export default App;
