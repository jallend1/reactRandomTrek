import React, { Component } from 'react';
import Movie from './Movie';
const API_KEY = '';

let results;

class App extends Component {
  state = {
    movie: 'Star Trek Beyond'
  }
  getNewMovie(){
    const trekMovies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Star+Trek`)
      .then(result => result.json())
      .then(data => console.log(data))
      
  }

  render(){
    return (
      <div className="App">
        <p>Random Star Trek Movie Generator</p>
        <Movie name= { this.state.movie }/>
        <button onClick={ this.getNewMovie }>Get New Movie</button>
      </div>
    );
  }
}

export default App;
