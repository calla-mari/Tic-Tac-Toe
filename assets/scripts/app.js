'use strict'

const authEvents = require('./auth/events.js')
const gameEvent = require('./gameEvent.js')
const game = require('./game.js')

$(() => {
  // authentication
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('.newAccount').on('click', authEvents, () => {
    $('#sign-in-form').addClass('hidden')
    $('#sign-up-form').removeClass('hidden')
    $('.newAccount').addClass('hidden')
    $('.existingAcct').removeClass('hidden')
    $('#display-message').addClass('hidden')
    $('#sign-up-form').trigger('reset')
    $('#sign-in-form').trigger('reset')
    // $('#cancel').addClass('hidden')
  })
  $('#sign-in-form').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('.btn').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('.box').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('.newAccount').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('.existingAcct').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('.existingAcct').on('click', authEvents, () => {
    $('#sign-in-form').removeClass('hidden')
    $('#sign-up-form').addClass('hidden')
    $('.existingAcct').addClass('hidden')
    $('.newAccount').removeClass('hidden')
    $('#display-message').addClass('hidden')
    $('#sign-up-form').trigger('reset')
    $('#sign-in-form').trigger('reset')
  })
  $('#sign-up-form').on('click', game, () => {
    $('#display-message').addClass('hidden')
  })
  $('#passChange-form').on('submit', authEvents.onPassChange)
  $('#changePass').on('click', authEvents, () => {
    $('#passChange-form').removeClass('hidden')
    $('#changePass').addClass('hidden')
    $('#cancel').removeClass('hidden')
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
    $('#passChange-form').trigger('reset')
    $('#cancel').addClass('hidden')
    $('#display-message').html('Did NOT change password')
    $('#display-message').css('color', 'red')
    $('#display-message').removeClass('hidden')
  })
  $('#logOut').on('click', authEvents.onLogOut)
  $('#logOut').on('click', authEvents, () => {
    $('#passChange-form').trigger('reset')
  })
  $('#logOut').on('click', game, () => {
    $('#update').text('1')
    $('#x').text('0')
    $('#o').text('0')
    let gamesPlayed = 1
    let x = 1
    let o = 1
  })
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
    $('#passChange-form').trigger('reset')
  })
  $('.btn').on('click', game, () => {
    $('#display-alert').addClass('hidden')
  })
})
