'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game2.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authentication
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#passChange-form').on('submit', authEvents.onPassChange)
  $('#logOut').on('click', authEvents.onLogOut)

  // game
  $('#newGame').on('click', gameEvents.onNewGame)
  $('.col-md-4').on('click', gameEvents, () => {
    alert('click')
  })
})
