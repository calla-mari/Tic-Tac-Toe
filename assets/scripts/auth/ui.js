'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message-signUp').html('Sign Up Sucessful')
  $('#display-message-signUp').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#passChange-form').removeClass('hidden')
  $('logOut').removeClass('hidden')
}

const signUpFail = function () {
  $('#display-message-signUp').html('Something went wrong, Please try again')
  $('#display-message-signUp').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message-signIn').html('Sign In Sucessful')
  $('#display-message-signIn').css('color', 'green')
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

const logOut = function () {
  $('#logOut').html('Log Out Sucessful!')
  $('#logOut').css('color', 'green')
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
