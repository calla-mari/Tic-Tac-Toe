const gameUI = require('./gameUI.js')
const store = require('./store.js')
const gameApi = require('./gameApi.js')
const gameEvent = require('./gameEvent.js')

let moves = 0

let gamesPlayed = 1

$('#update').text('1')
$('#x').text('0')
$('#o').text('0')

const newGame = function () {
  event.preventDefault()
  $('#gameBoard').removeClass('hidden')
  $('.box').text('')
  moves = 0
  $('.box').removeClass('win')
  $('.box').removeClass('tie')
  $('#xWins').addClass('hidden')
  $('#oWins').addClass('hidden')
  $('#tie').addClass('hidden')
  $('#scoreBoard').removeClass('hidden')
  $('#update').text(gamesPlayed++)
}

let x = 1
let o = 1

const checkWin = () => {
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('#0').addClass('win')
    $('#1').addClass('win')
    $('#2').addClass('win')
    store.game.over = true
    if (store.game.cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    $('#3').addClass('win')
    $('#4').addClass('win')
    $('#5').addClass('win')
    store.game.over = true
    if (store.game.cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[8] !== '') {
    $('#6').addClass('win')
    $('#7').addClass('win')
    $('#8').addClass('win')
    store.game.over = true
    if (store.game.cells[8] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') {
    $('#0').addClass('win')
    $('#3').addClass('win')
    $('#6').addClass('win')
    store.game.over = true
    if (store.game.cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[4] !== '') {
    $('#1').addClass('win')
    $('#4').addClass('win')
    $('#7').addClass('win')
    store.game.over = true
    if (store.game.cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[8] !== '') {
    $('#2').addClass('win')
    $('#5').addClass('win')
    $('#8').addClass('win')
    store.game.over = true
    if (store.game.cells[8] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    $('#0').addClass('win')
    $('#4').addClass('win')
    $('#8').addClass('win')
    store.game.over = true
    if (store.game.cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[4] !== '') {
    $('#2').addClass('win')
    $('#4').addClass('win')
    $('#6').addClass('win')
    store.game.over = true
    if (store.game.cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (moves === 9) {
    $('.box').addClass('tie')
    $('#tie').removeClass('hidden')
    store.game.over = true
  }
}

const gameProgress = (event) => {
  event.preventDefault()
  let data
  if (store.game.over === false) {
    if (!$(event.target).text()) {
      if (moves % 2 === 0) {
        $(event.target).text('x')
        store.game.cells[$(event.target).data('index')] = 'x'
        const cellIndex = $(event.target).data('index')
        const letter = 'x'
        moves++
        if (moves >= 5) {
          checkWin()
        }
        data = {
          'game': {
            'cell': {
              'index': cellIndex,
              'value': letter
            },
            'over': store.game.over
          }
        }
      } else if (moves % 2 !== 0) {
        $(event.target).text('o')
        store.game.cells[$(event.target).data('index')] = 'o'
        const cellIndex = $(event.target).data('index')
        const letter = 'o'
        moves++
        if (moves >= 5) {
          checkWin()
        }
        data = {
          'game': {
            'cell': {
              'index': cellIndex,
              'value': letter
            },
            'over': store.game.over
          }
        }
      }
    // } else {
    //   debugger
    //   $('.alert').show()
    //   $('#display-alert').removeClass('hidden')
    //   $('#display-alert').html('Invalid move. Please pick an empty square')
    //   $('#display-alert').css('color', 'red')
    }
    gameEvent.onUpdateScore(data, store.game.id)
  }
}

module.exports = {
  newGame,
  gameProgress,
  checkWin
}
