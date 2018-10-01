'use strict'

const store = require('./store.js')
const game = require('./game.js')

const allGamesSuccess = function (data) {
  console.log('allGamesSuccess')
  $('#allGamesPlayed').html(`Total Games played by User: ${data.games.length}`)
}

const allGamesFail = function (response) {
  console.log('allGamesFail')
}

const createSuccess = function (response) {
  console.log('createSuccess')
  store.gameNew = response.gameNew
  $('#gameBoard').removeClass('hidden')
  // $('#gameBoard').removeClass('hidden')
}

const createFail = function (response) {
  console.log('gameBoardFail')
}

const updateSuccess = function (response) {
  console.log('totSuccess')
  $('.box').on('click', game.gameProgress)
}

// const totFail = function (response) {
//   console.log('totFail')
// }
//
// const xSuccess = function (response) {
//   console.log('meep')
//   $('#x').append('')
// }
//
// const xFail = function (response) {
//   console.log('xFail')
// }
//
// const oSuccess = function (response) {
//   console.log('oSuccess')
//   // $('#o').innerHTML++
// }
//
// const oFail = function (response) {
//   console.log('oFail')
// }

// let gamesPlayed = 0

// const newGame = function () {
//   event.preventDefault()
//   $('.box').text('')
//   let board = []
//   let moves = 0
//   $('.box').removeClass('win')
//   $('.box').removeClass('tie')
//   $('#xWins').addClass('hidden')
//   $('#oWins').addClass('hidden')
//   $('#tie').addClass('hidden')
//   gamesPlayed++
//   // O score
//   // X score
// }

// const findSuccess = function (response) {
//   console.log(response)
//
// }

module.exports = {
  // newGame
  allGamesSuccess,
  allGamesFail,
  createSuccess,
  createFail,
  updateSuccess
  // totFail,
  // xSuccess,
  // xFail,
  // oSuccess,
  // oFail
}
