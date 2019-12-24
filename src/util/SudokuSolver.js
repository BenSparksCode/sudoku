export const generateBoard = (difficulty) => {
    //difficulty = no. of cells removed
    //min = 10, max = 64

    difficulty = 40

    let newBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    let templateRow = [1,2,3,4,5,6,7,8,9]

    //Generating 3 random diagonal subgrids as the seed board
    shuffle(templateRow)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newBoard[i][j] = templateRow[i*3+j]
        }
    }

    shuffle(templateRow)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newBoard[3+i][3+j] = templateRow[i*3+j]
        }
    }

    shuffle(templateRow)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            newBoard[6+i][6+j] = templateRow[i*3+j]
        }
    }

    //Solving new random board
    newBoard = solveSudoku(newBoard).board

    //Removing values from board randomly
    for (let i = 1; i < 82 ; i++) {
            templateRow[i] = i
    }

    shuffle(templateRow)

    let row = 0
    let col = 0

    for (let i = 0; i < difficulty; i++) {
        row = Math.ceil(templateRow[i]/9) - 1
        col = templateRow[i]%9
        newBoard[row][col] = 0
    }

    return newBoard
}

export const solveSudoku = (board) => {
    //board = 9x9 int array

    // Terminal condition - board is full - solved
    if (isBoardFull(board)) {
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

    //Get possible values for empty cell
    let possibleVals = getPossibleValues(board, row, col)

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

//Randomly shuffles array - for generating new games
const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export const checkSolved = (board) => {
    const templateRow = JSON.stringify([1,2,3,4,5,6,7,8,9])

    // 1. Check ROWS
    for (let i = 0; i < 9; i++) {
        if(JSON.stringify([...board[i]].sort()) !== (templateRow)){
            console.log(JSON.stringify([...board[i]].sort()));
            console.log((templateRow));
            console.log("Failed on row ", i);
            return false
        }
    }

    //2. Check COLUMNS
    for (let i = 0; i < 9; i++) {
        const tempCol = board.map((row)=>{
            return row[i]
        })

        if(JSON.stringify(tempCol.sort()) !== (templateRow)){
            console.log(JSON.stringify(tempCol.sort()));
            console.log((templateRow));
            console.log("Failed on col ", i);
            return false
        }
    }

    //3. Check SUBGRIDS
    for (let subgrid = 0; subgrid < 9; subgrid++) {
        let tempGrid = []

        //building subgrid array
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                tempGrid.push(board[r + (Math.floor(subgrid / 3) * 3)][c + (subgrid%3)*3])
            }
        }

        if(JSON.stringify(tempGrid.sort()) !== (templateRow)){
            console.log(JSON.stringify(tempGrid.tempGrid()));
            console.log((templateRow));
            console.log("Failed on subgrid ", subgrid);
            return false
        }
    }

    //If check hasn't failed yet then it's solved
    return true
}