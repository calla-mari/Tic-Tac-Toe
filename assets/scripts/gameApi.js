'use strict'

const getFormFields = require('../../lib/get-form-fields')
const store = require('./store.js')
const config = require('./config.js')
const game = require('./game.js')

const createGame = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: gameData
  })
}

const allGames = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: gameData
  })
}

const updateScore = function (gameData) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: gameData
  })
}

module.exports = {
  createGame,
  allGames,
  updateScore
}
