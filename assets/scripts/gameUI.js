'use strict'

const store = require('./store.js')

let gamesPlayed = 0

const newGame = function () {
  event.preventDefault()
  $('.box').text('')
  let board = []
  let moves = 0
  $('.box').removeClass('win')
  $('.box').removeClass('tie')
  $('#xWins').addClass('hidden')
  $('#oWins').addClass('hidden')
  $('#tie').addClass('hidden')
  gamesPlayed++
  // O score
  // X score
}

module.exports = {
  newGame
}
