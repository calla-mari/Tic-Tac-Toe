'use strict'

const store = require('./store.js')
const game = require('./game.js')

const allGamesSuccess = function (data) {
  $('#allGamesPlayed').html(`Total Games played by User: ${data.games.length}`)
}

const allGamesFail = function (response) {
  $('#display-alert').removeClass('hidden')
  $('#display-alert').html('Can\'t Retrieve Game, Please try again')
  $('#display-alert').css('color', 'red')
}

const createSuccess = function (response) {
  store.game = response.game
  $('#gameBoard').removeClass('hidden')
}

const createFail = function (response) {
  $('#display-alert').removeClass('hidden')
  $('#display-alert').html('Can\'t Create Game, Please try again')
  $('#display-alert').css('color', 'red')
}

const updateSuccess = function (data) {
  store.game = data.game
}

const updateFail = function (response) {
  $('#display-alert').removeClass('hidden')
  $('#display-alert').html('Oops, Please try again')
  $('#display-alert').css('color', 'red')
}

module.exports = {
  allGamesSuccess,
  allGamesFail,
  createSuccess,
  createFail,
  updateSuccess,
  updateFail
}
