'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
// const store = require('./store.js')
const gameApi = require('./gameApi.js')
const gameUI = require('./gameUI.js')
const game = require('./game.js')

const onAllGames = function (event) {
  console.log('all games')
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.allGames(gameData)
    .then(gameUI.allGamesSuccess)
    .catch(console.log)
}

const onNewGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  gameApi.createGame(gameData)
    .then(gameUI.createSuccess)
    .catch(console.log)
}

const onUpdateScore = function (data) {
  event.preventDefault()
  gameApi.updateScore(data)
    .then(console.log)
    .catch(console.log)
}

// const onUpdateX = function (event) {
//   event.preventDefault()
//   const xData = getFormFields(event.target)
//   gameApi.updateX(xData)
//     .then(console.log)
//     .catch(console.log)
// }
//
// const onUpdateO = function (event) {
//   event.preventDefault()
//   const oData = getFormFields(event.target)
//   gameApi.updateO(oData)
//     .then(console.log)
//     .catch(console.log)
// }

module.exports = {
  onAllGames,
  onNewGame,
  onUpdateScore
  // onUpdateX,
  // onUpdateO
}
