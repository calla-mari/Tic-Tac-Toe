const gameUI = require('./gameUI.js')
const store = require('./store.js')
const gameApi = require('./gameApi.js')

let moves = 0

let cells = []

let gamesPlayed = 1

let gameOver = false

$('#update').text('1')
$('#x').text('0')
$('#o').text('0')

const newGame = function () {
  event.preventDefault()
  $('#gameBoard').removeClass('hidden')
  $('.box').text('')
  cells = []
  moves = 0
  $('.box').on('click', gameProgress)
  $('.box').removeClass('win')
  $('.box').removeClass('tie')
  $('#xWins').addClass('hidden')
  $('#oWins').addClass('hidden')
  $('#tie').addClass('hidden')
  $('#total').text(gamesPlayed++)
  // O score
  // X score
}

// const updateScore = () => {
//   $('scoreBoard').bootstrapTable('updateRow', {
//     index: 1,
//     row: {
//       total: gamesPlayed++,
//       x: 0,
//       o: 0
//     }
//   })
// }

let x = 1
let o = 1

const checkWin = () => {
  if (cells[0] === cells[1] && cells[1] === cells[2] && cells[0] !== undefined) {
    $('#0').addClass('win')
    $('#1').addClass('win')
    $('#2').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[3] === cells[4] && cells[4] === cells[5] && cells[4] !== undefined) {
    $('#3').addClass('win')
    $('#4').addClass('win')
    $('#5').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[6] === cells[7] && cells[7] === cells[8] && cells[8] !== undefined) {
    $('#6').addClass('win')
    $('#7').addClass('win')
    $('#8').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[8] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[0] === cells[3] && cells[3] === cells[6] && cells[0] !== undefined) {
    $('#0').addClass('win')
    $('#3').addClass('win')
    $('#6').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[1] === cells[4] && cells[4] === cells[7] && cells[4] !== undefined) {
    $('#1').addClass('win')
    $('#4').addClass('win')
    $('#7').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[2] === cells[5] && cells[5] === cells[8] && cells[8] !== undefined) {
    $('#2').addClass('win')
    $('#5').addClass('win')
    $('#8').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[8] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[0] === cells[4] && cells[4] === cells[8] && cells[0] !== undefined) {
    $('#0').addClass('win')
    $('#4').addClass('win')
    $('#8').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[0] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (cells[2] === cells[4] && cells[4] === cells[6] && cells[4] !== undefined) {
    $('#2').addClass('win')
    $('#4').addClass('win')
    $('#6').addClass('win')
    $('.box').off('click', gameProgress)
    gameOver = true
    if (cells[4] === 'x') {
      $('#xWins').removeClass('hidden')
      $('#x').text(x++)
    } else {
      $('#oWins').removeClass('hidden')
      $('#o').text(o++)
    }
  } else if (moves === 9) {
    $('.box').addClass('tie')
    $('#tie').removeClass('hidden')
  }
}

const gameProgress = (event) => {
  console.log(cells)
  event.preventDefault()
  let data
  if ($(event.target).is(':empty')) {
    console.log(cells)
    if (moves % 2 === 0) {
      $(event.target).text('x')
      cells[$(event.target).data('index')] = 'x'
      let cellIndex = $(event.target).data('index')
      let letter = 'x'
      moves++
      data = {
        'game': {
          'cell': {
            'index': cellIndex,
            'value': letter
          },
          'over': false
        }
      }
      if (moves >= 5) {
        checkWin()
      }
    } else if (moves % 2 !== 0) {
      $(event.target).text('o')
      cells[$(event.target).data('index')] = 'o'
      let cellIndex = $(event.target).data('index')
      let letter = 'o'
      moves++
      data = {
        'game': {
          'cell': {
            'index': cellIndex,
            'value': letter
          },
          'over': false
        }
      }
      if (moves >= 5) {
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
  gameApi.updateScore(data)
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  newGame,
  cells,
  gameProgress,
  checkWin
}
