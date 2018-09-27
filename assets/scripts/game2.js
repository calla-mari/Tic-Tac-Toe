const ui = require('./auth/ui.js')

let gamesPlayed = 0

let moves = 0

const onNewGame = function () {
  event.preventDefault()
  $('.box').text('')
  moves = 0
  gamesPlayed++
  // X score
  // O score
}

// const board = {
//   player1: true,
//   playerClick: function () {
//     board.player1 = !board.player1
//   }
// }

const top = [$('#0'), $('#1'), $('#2')]

const checkWin = () => {
  if (top[0] === top[1] && top[1] === top[2]) {
    alert('win')
  }
}

const gameProgress = () => {
  event.preventDefault()
  if ($(event.target).is(':empty')) {
    if (moves % 2 === 0) {
      $(event.target).text('X')
      moves++
      if (moves >= 5) {
        checkWin()
      }
    } else {
      $(event.target).text('O')
      moves++
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
  } console.log(moves)
}
const alert = () => {

}

module.exports = {
  onNewGame,
  // board,
  gameProgress,
  checkWin
}
