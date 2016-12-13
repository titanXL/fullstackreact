import React, { Component } from 'react'
import Requester from './client'
import Movie from './Movie'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }
  render () {
    let movies = this.state.movies.map((movie, i) => {
      return <Movie movie={movie} key={i}/>
    })
    return (
      <div>
        {movies}
      </div>
    )
  }
  componentDidMount () {
    Requester.getMovies().then(movies => {
      this.setState({
        movies: movies
      })
    })
  }

}

export default App
