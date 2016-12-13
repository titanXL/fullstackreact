import $ from 'jquery'

const Requester = (function () {
  function getMovies () {
    return $.ajax({
      method:'GET',
      url:'/api/movies'

    })
  }
  return {
    getMovies}
}())

export default Requester
