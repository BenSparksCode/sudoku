export const solveSudoku = (board) => {
    //board = 9x9 int array

    // Terminal condition - board is full - solved
    if (isBoardFull(board)) {
        console.log("Board looks correct - it is full:");
        console.log(board);
        return {"board": board, "solved":true }
    }
    //Board is not full - not solved
    //Find 1st empty cell
    let row, col
    let found = false
    for (let i = 0; i < 9; i++) {
        if (found) {
            break
        }

        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                row = i
                col = j
                found = true
                break
            }
        }
    }

    // console.log("Empty cell found at", row, col);

    //Get possible values for empty cell
    let possibleVals = getPossibleValues(board, row, col)

    // console.log(possibleVals);

    //Trying to solve with all possible values for this cell
    for (let i = 0; i < 9; i++) {
        if (possibleVals[i] !== 0) {
            board[row][col] = i + 1

            //Testing deep cloning
            let newBoard = []
            for (let i = 0; i < 9; i++) {
                newBoard.push([...board[i]])
            }

            const res = solveSudoku(newBoard)
            if(res.solved){
                return res
            }
        }
    }

    //Resetting cell to blank, backtracking to try different values in prev cells
    board[row][col] = 0
    return {"board":board, "solved":false}
    // console.log("Solution didn't work!", board);
    // console.log("Broke at row ", row+1, " col ", col+1);

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
    let possibleVals = new Array(9).fill(1)

    //1. Check impossible values in ROW
    for (let i = 0; i < 9; i++) {
        if (board[row][i] !== 0) {
            possibleVals[board[row][i] - 1] = 0
        }
    }

    //2. Check impossible values in COLUMN
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== 0 && possibleVals[board[i][col] - 1] !== 0) {
            possibleVals[board[i][col] - 1] = 0
        }
    }


    //3. Check impossible values in SUBGRID
    const lastRow = Math.ceil((row + 0.001) / 3) * 3
    const lastCol = Math.ceil((col + 0.001) / 3) * 3

    for (let i = lastRow - 3; i < lastRow; i++) {
        for (let j = lastCol - 3; j < lastCol; j++) {
            if (board[i][j] !== 0 && possibleVals[board[i][j] - 1] !== 0) {
                possibleVals[board[i][j] - 1] = 0
            }
        }
    }

    return possibleVals
}