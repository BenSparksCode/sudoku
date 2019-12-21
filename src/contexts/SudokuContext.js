import React, { createContext, useState } from 'react'

import { solveSudoku } from '../util/SudokuSolver'

export const SudokuContext = createContext()

// const testGrid = [
//     [8, 3, 5, 4, 1, 6, 9, 2, 7],
//     [2, 9, 6, 8, 5, 7, 4, 3, 1],
//     [4, 1, 7, 2, 9, 3, 6, 5, 8],
//     [5, 6, 9, 1, 3, 4, 7, 8, 2],
//     [1, 2, 3, 6, 7, 8, 5, 4, 9],
//     [7, 4, 8, 5, 2, 9, 1, 6, 3],
//     [6, 5, 2, 7, 8, 1, 3, 9, 4],
//     [9, 8, 1, 3, 4, 5, 2, 7, 6],
//     [3, 7, 4, 9, 6, 2, 8, 1, 5]
// ]

const testGrid = [
    [5, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 2, 5, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 8, 0, 9, 0, 0],
    [0, 7, 0, 3, 0, 4, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 1, 0, 0]
]

const initialState = {
    initialGrid: [],
    workingGrid: [],
    solved: false
}

const generateNewBoard = () => {
    //TODO makes fresh sudoku board
    //Can improve with difficulty setting
}


const SudokuContextProvider = (props) => {

    const [gridValues, setGridValues] = useState(testGrid)

    const changeCellValue = (row, col, newVal) => {
        let gridCopy = [...gridValues]
        gridCopy[row - 1][col - 1] = newVal
        setGridValues(gridCopy)
    }

    const generateNewBoard = () => {
        console.log("new");
    }

    const solveBoard = () => {
        let newGrid = []
        for (let i = 0; i < 9; i++) {
            newGrid.push([...gridValues[i]])
        }
        const res = solveSudoku(newGrid)
        setGridValues(res.board)
    }

    const checkSolution = () => {
        let newGrid = []
        for (let i = 0; i < 9; i++) {
            newGrid.push([...gridValues[i]])
        }

        console.log("Looks like board was actually solved", solveSudoku(newGrid));
        console.log("checked");
    }





    return (
        <SudokuContext.Provider value={{ gridValues, changeCellValue, generateNewBoard, solveBoard, checkSolution }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export default SudokuContextProvider
