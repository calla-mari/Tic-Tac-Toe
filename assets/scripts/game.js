const gameUI = require('./gameUI.js')

let moves = 0

let board = []

const checkWin = () => {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== undefined) {
    $('#0').addClass('win')
    $('#1').addClass('win')
    $('#2').addClass('win')
    if (board[0] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[3] === board[4] && board[4] === board[5] && board[4] !== undefined) {
    $('#3').addClass('win')
    $('#4').addClass('win')
    $('#5').addClass('win')
    if (board[4] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== undefined) {
    $('#6').addClass('win')
    $('#7').addClass('win')
    $('#8').addClass('win')
    if (board[8] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== undefined) {
    $('#0').addClass('win')
    $('#3').addClass('win')
    $('#6').addClass('win')
    if (board[0] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[1] === board[4] && board[4] === board[7] && board[4] !== undefined) {
    $('#1').addClass('win')
    $('#4').addClass('win')
    $('#7').addClass('win')
    if (board[4] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== undefined) {
    $('#2').addClass('win')
    $('#5').addClass('win')
    $('#8').addClass('win')
    if (board[8] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== undefined) {
    $('#0').addClass('win')
    $('#4').addClass('win')
    $('#8').addClass('win')
    if (board[0] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  } else if (board[2] === board[4] && board[4] === board[6] && board[4] !== undefined) {
    $('#2').addClass('win')
    $('#4').addClass('win')
    $('#6').addClass('win')
    if (board[4] === 'x') {
      $('#xWins').removeClass('hidden')
    } else {
      $('#oWins').removeClass('hidden')
    }
  }
}

const gameProgress = () => {
  event.preventDefault()
  if ($(event.target).is(':empty')) {
    if (moves % 2 === 0) {
      $(event.target).text('x')
      board[$(event.target)[0].id] = 'x'
      console.log(board)
      moves++
      if (moves === 9) {
        $('.box').addClass('tie')
        $('#tie').removeClass('hidden')
      } else if (moves >= 5) {
        checkWin()
      }
    } else if (moves % 2 !== 0) {
      $(event.target).text('o')
      board[$(event.target)[0].id] = 'o'
      console.log(board)
      moves++
      if (moves === 9) {
        $('.box').addClass('tie')
        $('#tie').removeClass('hidden')
      } else if (moves >= 5) {
        checkWin()
      }
    }
  } else {
    $('.alert').show()
    // if ($('.alert').show()) {
    //   $('body').click(() => {
    //     $('.alert').hide()
    //   })
    // }
  }
}

module.exports = {
  board,
  gameProgress,
  checkWin
}
