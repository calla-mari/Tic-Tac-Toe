'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#newGame').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#passChange-form').removeClass('hidden')
  $('#logOut').removeClass('hidden')
}

const signUpFail = function () {
  $('#display-message-signUp').html('Something went wrong, Please try again')
  $('#display-message-signUp').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#newGame').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#passChange-form').removeClass('hidden')
  $('#logOut').removeClass('hidden')
}

const signInFail = function () {
  $('#display-message-signIn').html('Incorrect Email or Password')
  $('#display-message-signIn').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const passChangeSuccess = function () {
  $('#display-message-passChange').html('Password Changed!')
  $('#display-message-passChange').css('color', 'green')
  $('#passChange-form').trigger('reset')
}

const passChangeFail = function () {
  $('#display-message-passChange').html('Incorrect Password')
  $('#display-message-passChange').css('color', 'red')
  $('#passChange-form').trigger('reset')
}

const newGame = function () {
  $()
}

const logOut = function () {
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#passChange-form').addClass('hidden')
  $('#logOut').addClass('hidden')
  $('#newGame').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  passChangeSuccess,
  passChangeFail,
  newGame,
  logOut
}
