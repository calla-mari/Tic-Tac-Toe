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
  $('#sign-in-form').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('.btn').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#logIn').on('click', authEvents, () => {
    $('#sign-in-form').removeClass('hidden')
    $('#sign-up-form').addClass('hidden')
  })
  $('#sign-up-form').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('#passChange-form').on('submit', authEvents.onPassChange)
  $('#changePass').on('click', authEvents, () => {
    $('#passChange-form').removeClass('hidden')
    $('#changePass').addClass('hidden')
  })
  $('#changePass').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
    $('#changePass').addClass('hidden')
  })
  $('#passChange-form').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('#cancel').on('click', authEvents, () => {
    $('#passChange-form').addClass('hidden')
    $('#changePass').removeClass('hidden')
  })
  $('#logOut').on('click', authEvents.onLogOut)
  // game
  $('#newGame-form').on('click', gameEvent.onNewGame)
  $('.box').on('click', game.gameProgress)
  $('#newGame').on('click', game.newGame)
  $('#allGames').on('submit', gameEvent.onAllGames)
  // $('.box').on('click', game, () => {
  //   $('.alert').hide()
  // })
  // $('.alert').on('click', game, () => {
  //   $('.alert').hide()
  // })
  // $('#newGame').on('click', game, () => {
  //   $('.alert').hide()
  // })
  $('.box').on('click', game, () => {
    $('#display-alert').addClass('hidden')
  })
  $('#newGame').on('click', game, () => {
    $('#display-alert').addClass('hidden')
  })
  $('.btn').on('click', game, () => {
    $('#display-alert').addClass('hidden')
  })
})
