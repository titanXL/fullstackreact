import React, { Component } from 'react'

export default class Movie extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.movie.Title}</h1>
        <h3>{this.props.movie.Year}</h3>
        <img src={this.props.movie.Poster} />
      </div>
    )
  }
}
