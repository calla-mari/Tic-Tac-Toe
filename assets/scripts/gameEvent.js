'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')
const gameApi = require('./gameApi.js')
const gameUI = require('./gameUI.js')

const onFindGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.findGame()
    .then()
    .catch()
}

const onAllGames = function (event) {
  event.preventDefault()
  gameApi.allGames()
    .then()
    .catch()
}

const onNewGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.createGame()
    .then()
    .catch()
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.updateGame()
    .then()
    .catch()
}

module.exports = {
  onFindGame,
  onAllGames,
  onUpdateGame
}
