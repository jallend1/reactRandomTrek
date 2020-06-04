import React, { Component } from 'react';
import Movie from './Movie';

let results;

class App extends Component {
  state = {
    movie: 'Star Trek Beyond'
  }
  getNewMovie(){
    const trekMovies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Star+Trek`)
      .then(result => result.json())
      .then(data => {
        const randomNumber = Math.floor(Math.random() * data.results.length);
        console.log(data.results[randomNumber].title)
        this.setState({
          movie: data.results[randomNumber].title
        });
      })
  }

  render(){
    return (
      <div className="App">
        <p>Random Star Trek Movie Picker</p>
        <Movie name= { this.state.movie }/>
        <button onClick={ this.getNewMovie }>Get New Movie</button>
      </div>
    );
  }
}

export default App;
