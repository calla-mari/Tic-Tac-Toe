'use strict'

const store = require('../store.js')
const game = require('../game.js')

const signInSuccess = function (response) {
  $('#newGame-form').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#logOut').removeClass('hidden')
  $('#changePass').removeClass('hidden')
  $('#scoreBoard').removeClass('hidden')
  $('#allGames').removeClass('hidden')
  // $('#gameBoard').removeClass('hidden')
}

const signInFail = function () {
  $('#display-message-signIn').html('Incorrect Email or Password')
  $('#display-message-signIn').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const signUpSuccess = function () {
  $('#display-message-signUp').html('Thank you for signing up! Please sign in to play')
  $('#display-message-signUp').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#1stStep').addClass('hidden')
  $('#2ndStep').removeClass('hidden')
  // $('#logOut').removeClass('hidden')
  // $('#changePass').removeClass('hidden')
}

const signUpFail = function () {
  $('#display-message-signUp').html('Something went wrong, Please try again')
  $('#display-message-signUp').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const passChangeSuccess = function () {
  $('#display-message-passChange').html('Password Changed!')
  $('#display-message-passChange').css('color', 'green')
  $('#passChange-form').trigger('reset')
  $('#changePass').removeClass('hidden')
  $('#display-message-passChange').removeClass('hidden')
  $('#passChange-form').addClass('hidden')
  // setTimeout(function () {
  //   $('#display-message-passChange').fadeOut().empty()
  // }, 3000)
}

const passChangeFail = function () {
  $('#display-message-passChange').html('Incorrect Password')
  $('#display-message-passChange').css('color', 'red')
  $('#passChange-form').trigger('reset')
}

const logOut = function () {
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#passChange-form').addClass('hidden')
  $('#logOut').addClass('hidden')
  $('#newGame').addClass('hidden')
  $('#changePass').addClass('hidden')
  $('#gameBoard').addClass('hidden')
  $('#scoreBoard').addClass('hidden')
  $('#gameLib').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passChangeSuccess,
  passChangeFail,
  logOut
}
