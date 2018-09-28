'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const gameUI = require('./gameUI.js')
const gameEvents = require('./game.js')

// use require without a reference to ensure a file is bundled
// require('./example')

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
  $('#newGame').on('click', gameUI.newGame)
  // x win
  // o win
  // find game
  // all game
  $('.box').on('click', gameEvents.gameProgress)
  // $('.box').on('click', gameEvents, () => {
  //   $(event.target).text('X')
  // })
})
