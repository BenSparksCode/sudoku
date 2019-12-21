export const solveSudoku = (board) => {
    //board = 9x9 int array
    if (!isBoardFull(board)) {
        return false
    }
    return getPossibleValues(board, 2,2)
}

const isBoardFull = (board) => {
    //Check for 0s (blanks) in board - false if any blanks
    for (let i = 0; i < board.length; i++) {
        //Checks every row for 0s - returns false if 0 found
        if (board[i].some((n) => n === 0)) {
            return false
        }
    }
    return true
}

const getPossibleValues = (board, row, col) => {
    if(isBoardFull(board)){
        return new Array(9).fill(0)
    }
    //Given an incomplete board
}