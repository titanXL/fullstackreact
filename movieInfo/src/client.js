import $ from 'jquery'

const Requester = (function () {
  function getMovies () {
    return $.ajax({
      method:'GET',
      url: 'http://localhost:3001/api/movies'

    })
  }
  return {
    getMovies}
}())

export default Requester
