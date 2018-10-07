'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store.js')
const gameApi = require('./gameApi.js')
const gameUI = require('./gameUI.js')
const game = require('./game.js')

const onAllGames = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.allGames(gameData)
    .then(gameUI.allGamesSuccess)
    .catch(gameUI.allGamesFail)
}

const onNewGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.createGame(gameData)
    .then(gameUI.createSuccess)
    .catch(gameUI.createFail)
}

const onUpdateScore = function (data) {
  event.preventDefault()
  gameApi.updateScore(data)
    .then(gameUI.updateSuccess)
    .catch(gameUI.updateFail)
}

module.exports = {
  onAllGames,
  onNewGame,
  onUpdateScore
}
