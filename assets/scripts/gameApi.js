'use strict'

const getFormFields = require('../../lib/get-form-fields')
const store = require('./store.js')
const config = require('./config.js')

const createGame = function (gameData) {
  const gameId = gameData.game.id
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: gameData
  })
}

const allGames = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const findGames = function (gameData) {
  const gameId = gameData.game.id
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'GET'
  })
}

// const passChange = function (passwordData) {
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'PATCH',
//     data: passwordData
//   })
// }

module.exports = {
  createGame,
  allGames,
  findGames
}
