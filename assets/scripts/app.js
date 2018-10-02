'use strict'

const authEvents = require('./auth/events.js')
const gameEvent = require('./gameEvent.js')
const game = require('./game.js')

$(() => {
  // authentication
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#signUp').on('click', authEvents, () => {
    $('#sign-in-form').addClass('hidden')
    $('#sign-up-form').removeClass('hidden')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#logIn').on('click', authEvents, () => {
    $('#sign-in-form').removeClass('hidden')
    $('#sign-up-form').addClass('hidden')
  })
  $('#passChange-form').on('submit', authEvents.onPassChange)
  $('#changePass').on('click', authEvents, () => {
    $('#passChange-form').removeClass('hidden')
    $('#changePass').addClass('hidden')
  })
  $('#cancel').on('click', authEvents, () => {
    $('#passChange-form').addClass('hidden')
    $('#changePass').removeClass('hidden')
  })
  $('#logOut').on('click', authEvents.onLogOut)
  // game
  $('#newGame-form').on('click', gameEvent.onNewGame)
  // $('.box').on('click', game.gameProgress)
  $('#newGame-form').on('click', game.newGame)
  $('#allGames').on('submit', gameEvent.onAllGames)
  $('#gameBoard').on('submit', game.gameProgress)
  $('.alert').on('click', game, () => {
    $('.alert').hide()
  })
  // $('#0').on('click', gameEvent.)
  // $('#x').on('submit', gameEvent.onUpdateX)
  // $('#o').on('submit', gameEvent.onUpdateO)
})
