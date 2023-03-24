const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameOver = false;

// Check if a player has won
function checkWinner(player) {
    if (
        (gameBoard[0] == player && gameBoard[1] == player && gameBoard[2] == player) ||
        (gameBoard[3] == player && gameBoard[4] == player && gameBoard[5] == player) ||
        (gameBoard[6] == player && gameBoard[7] == player && gameBoard[8] == player) ||
        (gameBoard[0] == player && gameBoard[3] == player && gameBoard[6] == player) ||
        (gameBoard[1] == player && gameBoard[4] == player && gameBoard[7] == player) ||
        (gameBoard[2] == player && gameBoard[5] == player && gameBoard[8] == player) ||
        (gameBoard[0] == player && gameBoard[4] == player && gameBoard[8] == player) ||
        (gameBoard[2] == player && gameBoard[4] == player && gameBoard[6] == player)
    ) {
        result.innerHTML = `${player} wins!`;
        gameOver = true;
    } else if (!gameBoard.includes('')) {
        result.innerHTML = 'Draw!';
        gameOver = true;
    }
}

// Update the game board and check for winner
function updateBoard(index) {
    if (gameBoard[index] === '') {
        gameBoard[index] = currentPlayer;
        cells[index].innerHTML = currentPlayer;
        checkWinner(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Add click listeners to all cells
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (!gameOver) {
            updateBoard(i);
        }
    });
}


// Reset the game
function resetGame() {
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = '';
        cells[i].innerHTML = '';
    }
    currentPlayer = 'X';
    gameOver = false;
    result.innerHTML = '';
}

// Add click listener to reset button
reset.addEventListener('click', function() {
    resetGame();
});